/**
 * DungeonFloorLayout_Level25.js - Procedural Dungeon Floor Multi-Room Graph & Loot Plan
 * Floor Level: 25
 * Part of Aetheria Tactics Engine
 */

class DungeonFloorLayout_Level25 {
  constructor() {
    this.floorLevel = 25;
    this.chamberCount = 6;
    this.difficultyMultiplier = 1.50;
    this.bossPresent = true;
  }

  buildFloorGraph() {
    const chambers = [];
    for (let c = 1; c <= this.chamberCount; c++) {
      chambers.push({
        chamberId: 'F_25_CH_' + c,
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

module.exports = DungeonFloorLayout_Level25;
