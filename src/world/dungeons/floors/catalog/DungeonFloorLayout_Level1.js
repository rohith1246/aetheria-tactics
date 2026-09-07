/**
 * DungeonFloorLayout_Level1.js - Procedural Dungeon Floor Multi-Room Graph & Loot Plan
 * Floor Level: 1
 * Part of Aetheria Tactics Engine
 */

class DungeonFloorLayout_Level1 {
  constructor() {
    this.floorLevel = 1;
    this.chamberCount = 6;
    this.difficultyMultiplier = 1.02;
    this.bossPresent = false;
  }

  buildFloorGraph() {
    const chambers = [];
    for (let c = 1; c <= this.chamberCount; c++) {
      chambers.push({
        chamberId: 'F_1_CH_' + c,
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

module.exports = DungeonFloorLayout_Level1;
