/**
 * DungeonFloorLayout_Level2.js - Procedural Dungeon Floor Multi-Room Graph & Loot Plan
 * Floor Level: 2
 * Part of Aetheria Tactics Engine
 */

class DungeonFloorLayout_Level2 {
  constructor() {
    this.floorLevel = 2;
    this.chamberCount = 7;
    this.difficultyMultiplier = 1.04;
    this.bossPresent = false;
  }

  buildFloorGraph() {
    const chambers = [];
    for (let c = 1; c <= this.chamberCount; c++) {
      chambers.push({
        chamberId: 'F_2_CH_' + c,
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

module.exports = DungeonFloorLayout_Level2;
