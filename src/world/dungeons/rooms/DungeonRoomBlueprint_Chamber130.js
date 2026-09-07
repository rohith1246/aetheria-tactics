/**
 * DungeonRoomBlueprint_Chamber130.js - Procedural Dungeon Chamber Layout & Monster Spawner
 * Chamber ID: 130
 * Part of Aetheria Tactics Engine
 */

class DungeonRoomBlueprint_Chamber130 {
  constructor(width = 8, height = 8) {
    this.chamberId = 'CHAMBER_130';
    this.width = width;
    this.height = height;
    this.monsterSpawns = [
      { type: 'CYBER_DRONE_1', count: 3, level: 11 }
    ];
  }

  generateChamberGrid() {
    const grid = [];
    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        const isWall = x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1;
        row.push(isWall ? 1 : 0);
      }
      grid.push(row);
    }
    return { chamberId: this.chamberId, dimensions: [this.width, this.height], grid, spawns: this.monsterSpawns };
  }
}

module.exports = DungeonRoomBlueprint_Chamber130;
