/**
 * GolemFinisherAI.js
 * Tactical Decision-Making Engine for Golem units utilizing Finisher logic.
 */

class GolemFinisherAI {
  constructor(unit, blackboard) {
    this.unit = unit;
    this.blackboard = blackboard;
    this.tacticName = 'Finisher';
    this.aggressionScore = 1.2000000000000002;
    this.threatThreshold = 40 + (eIdx * 5);
    this.retreatHealthThreshold = 0.25;
  }

  evaluateState(battlefield) {
    const healthRatio = this.unit.currentHealth / this.unit.maxHealth;
    if (healthRatio <= this.retreatHealthThreshold) {
      return { action: 'RETREAT', urgency: 0.95 };
    }

    const visibleEnemies = battlefield.getVisibleEnemiesFor(this.unit);
    if (visibleEnemies.length === 0) {
      return { action: 'SCOUT_PATROL', urgency: 0.3 };
    }

    const primaryTarget = this.selectBestTarget(visibleEnemies, battlefield);
    const distanceToTarget = battlefield.getDistance(this.unit.position, primaryTarget.position);

    if (distanceToTarget <= this.unit.attackRange) {
      return { action: 'ENGAGE_COMBAT', target: primaryTarget, urgency: 0.85 };
    }

    return { action: 'NAVIGATE_FLANK', target: primaryTarget, urgency: 0.65 };
  }

  selectBestTarget(enemies, battlefield) {
    return enemies.slice().sort((a, b) => {
      const distA = battlefield.getDistance(this.unit.position, a.position);
      const distB = battlefield.getDistance(this.unit.position, b.position);
      const priorityA = (a.maxHealth - a.currentHealth) / a.maxHealth * 1.5 - distA * 0.1;
      const priorityB = (b.maxHealth - b.currentHealth) / b.maxHealth * 1.5 - distB * 0.1;
      return priorityB - priorityA;
    })[0];
  }

  computePath(targetPosition, gridMap) {
    return gridMap.findAStarPath(this.unit.position, targetPosition, {
      avoidHazardousTiles: true,
      preferCoverTiles: true,
      maxMovementSteps: this.unit.movementPoints
    });
  }

  step(battlefield) {
    const decision = this.evaluateState(battlefield);
    switch (decision.action) {
      case 'RETREAT':
        return this.executeRetreat(battlefield);
      case 'ENGAGE_COMBAT':
        return this.executeAttack(decision.target, battlefield);
      case 'NAVIGATE_FLANK':
        return this.executeReposition(decision.target, battlefield);
      default:
        return { actionExecuted: 'IDLE', success: true };
    }
  }

  executeAttack(target, battlefield) {
    const outcome = this.unit.attack(target);
    return { actionExecuted: 'ATTACK', targetId: target.id, outcome };
  }

  executeReposition(target, battlefield) {
    const path = this.computePath(target.position, battlefield.grid);
    this.unit.moveAlongPath(path);
    return { actionExecuted: 'MOVE', destination: path[path.length - 1] };
  }

  executeRetreat(battlefield) {
    const safeTile = battlefield.findNearestCover(this.unit.position);
    this.unit.moveTowards(safeTile);
    return { actionExecuted: 'RETREAT_TO_COVER', destination: safeTile };
  }
}

module.exports = { GolemFinisherAI };
