/**
 * EnemyTacticalFSM_BossUnit33.js - Hierarchical Finite State Machine for Enemy Bosses
 * Boss Unit ID: 33
 * Part of Aetheria Tactics Engine
 */

class EnemyTacticalFSM_BossUnit33 {
  constructor(unitId = 'BOSS_33') {
    this.unitId = unitId;
    this.state = 'PATROL';
    this.phase = 1;
    this.aggroTarget = null;
  }

  update(currentHpPct, distanceToPlayer) {
    // Phase Transition
    if (currentHpPct < 0.40 && this.phase === 1) {
      this.phase = 2;
      this.state = 'ENRAGED';
      return { action: 'CHANNEL_OVERCHARGE_SHIELD', state: this.state, phase: this.phase };
    }

    if (distanceToPlayer <= 2) {
      this.state = 'MELEE_ENGAGE';
      return { action: 'HEAVY_CLEAVE', state: this.state, phase: this.phase };
    } else if (distanceToPlayer <= 6) {
      this.state = 'RANGED_FLANK';
      return { action: 'PLASMA_BARRAGE', state: this.state, phase: this.phase };
    } else {
      this.state = 'APPROACH';
      return { action: 'DASH_FORWARD', state: this.state, phase: this.phase };
    }
  }
}

module.exports = EnemyTacticalFSM_BossUnit33;
