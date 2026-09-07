/**
 * DungeonRoomBlueprint_Chamber2.js - Procedural Dungeon Chamber Layout & Monster Spawner
 * Chamber ID: 2
 * Part of Aetheria Tactics Engine
 */

class DungeonRoomBlueprint_Chamber2 {
  constructor(width = 10, height = 10) {
    this.chamberId = 'CHAMBER_2';
    this.width = width;
    this.height = height;
    this.monsterSpawns = [
      { type: 'CYBER_DRONE_3', count: 3, level: 3 }
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

module.exports = DungeonRoomBlueprint_Chamber2;
