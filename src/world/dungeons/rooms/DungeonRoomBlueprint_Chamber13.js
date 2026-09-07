/**
 * DungeonRoomBlueprint_Chamber13.js - Procedural Dungeon Chamber Layout & Monster Spawner
 * Chamber ID: 13
 * Part of Aetheria Tactics Engine
 */

class DungeonRoomBlueprint_Chamber13 {
  constructor(width = 11, height = 11) {
    this.chamberId = 'CHAMBER_13';
    this.width = width;
    this.height = height;
    this.monsterSpawns = [
      { type: 'CYBER_DRONE_4', count: 2, level: 14 }
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

module.exports = DungeonRoomBlueprint_Chamber13;
