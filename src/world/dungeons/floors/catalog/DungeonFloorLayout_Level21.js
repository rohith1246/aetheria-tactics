/**
 * DungeonFloorLayout_Level21.js - Procedural Dungeon Floor Multi-Room Graph & Loot Plan
 * Floor Level: 21
 * Part of Aetheria Tactics Engine
 */

class DungeonFloorLayout_Level21 {
  constructor() {
    this.floorLevel = 21;
    this.chamberCount = 10;
    this.difficultyMultiplier = 1.42;
    this.bossPresent = false;
  }

  buildFloorGraph() {
    const chambers = [];
    for (let c = 1; c <= this.chamberCount; c++) {
      chambers.push({
        chamberId: 'F_21_CH_' + c,
        type: (c === this.chamberCount && this.bossPresent) ? 'BOSS_CHAMBER' : 'COMBAT_ROOM',
        enemyLevel: Math.round(10 * this.difficultyMultiplier),
        lootTier: this.floorLevel > 50 ? 'LEGENDARY' : 'EPIC'
      });
    }

    return {
      floor: this.floorLevel,
      difficulty: this.difficultyMultiplier,
      chambers,
      totalRooms: chambers.length
    };
  }
}

module.exports = DungeonFloorLayout_Level21;
