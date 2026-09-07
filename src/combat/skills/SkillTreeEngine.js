/**
 * SkillTreeEngine.js - Directed Acyclic Skill Tree Graph & Synergy Bonus Engine
 * Part of Aetheria Tactics Engine
 */

class SkillNode {
  constructor(id, name, config = {}) {
    this.id = id;
    this.name = name;
    this.category = config.category || 'OFFENSIVE'; // 'OFFENSIVE', 'DEFENSIVE', 'UTILITY'
    this.maxPoints = config.maxPoints || 5;
    this.allocatedPoints = 0;
    this.prerequisites = config.prerequisites || []; // Array of skill IDs required
    this.requiredTotalPoints = config.requiredTotalPoints || 0;
    this.statModifiers = config.statModifiers || {}; // e.g. { attackBonus: 5, critRate: 0.02 }
    this.synergies = config.synergies || []; // [{ skillId: 'SKILL_X', bonus: 1.1 }]
  }

  isMaxed() {
    return this.allocatedPoints >= this.maxPoints;
  }
}

class SkillTreeEngine {
  constructor(treeId = 'tactics_tree') {
    this.treeId = treeId;
    this.nodes = new Map();
    this.totalAllocatedPoints = 0;
  }

  registerSkill(id, name, config = {}) {
    const node = new SkillNode(id, name, config);
    this.nodes.set(id, node);
    return node;
  }

  canAllocate(skillId) {
    const node = this.nodes.get(skillId);
    if (!node) return { allowed: false, reason: 'SKILL_NOT_FOUND' };
    if (node.isMaxed()) return { allowed: false, reason: 'MAX_POINTS_REACHED' };
    if (this.totalAllocatedPoints < node.requiredTotalPoints) {
      return { allowed: false, reason: 'TIER_POINTS_REQUIREMENT_NOT_MET' };
    }

    for (const prereqId of node.prerequisites) {
      const prereq = this.nodes.get(prereqId);
      if (!prereq || prereq.allocatedPoints < prereq.maxPoints) {
        return { allowed: false, reason: `PREREQUISITE_NOT_MAXED_${prereqId}` };
      }
    }

    return { allowed: true };
  }

  allocatePoint(skillId) {
    const check = this.canAllocate(skillId);
    if (!check.allowed) return check;

    const node = this.nodes.get(skillId);
    node.allocatedPoints += 1;
    this.totalAllocatedPoints += 1;
    return { allowed: true, newPoints: node.allocatedPoints, totalPoints: this.totalAllocatedPoints };
  }

  resetTree() {
    for (const [_, node] of this.nodes) {
      node.allocatedPoints = 0;
    }
    this.totalAllocatedPoints = 0;
  }

  calculateAggregateStats() {
    const aggregate = {};

    for (const [_, node] of this.nodes) {
      if (node.allocatedPoints > 0) {
        let multiplier = 1.0;
        for (const syn of node.synergies) {
          const synNode = this.nodes.get(syn.skillId);
          if (synNode && synNode.allocatedPoints > 0) {
            multiplier *= (1 + (syn.bonus - 1) * (synNode.allocatedPoints / synNode.maxPoints));
          }
        }

        for (const [stat, val] of Object.entries(node.statModifiers)) {
          const scaledVal = (val * node.allocatedPoints) * multiplier;
          aggregate[stat] = (aggregate[stat] || 0) + scaledVal;
        }
      }
    }

    return aggregate;
  }
}

module.exports = SkillTreeEngine;
