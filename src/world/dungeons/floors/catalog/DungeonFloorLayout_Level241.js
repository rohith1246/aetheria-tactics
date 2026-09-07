/**
 * DungeonFloorLayout_Level241.js - Procedural Dungeon Floor Multi-Room Graph & Loot Plan
 * Floor Level: 241
 * Part of Aetheria Tactics Engine
 */

class DungeonFloorLayout_Level241 {
  constructor() {
    this.floorLevel = 241;
    this.chamberCount = 6;
    this.difficultyMultiplier = 5.82;
    this.bossPresent = false;
  }

  buildFloorGraph() {
    const chambers = [];
    for (let c = 1; c <= this.chamberCount; c++) {
      chambers.push({
        chamberId: 'F_241_CH_' + c,
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

module.exports = DungeonFloorLayout_Level241;
