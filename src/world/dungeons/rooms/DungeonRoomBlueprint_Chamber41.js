/**
 * DungeonRoomBlueprint_Chamber41.js - Procedural Dungeon Chamber Layout & Monster Spawner
 * Chamber ID: 41
 * Part of Aetheria Tactics Engine
 */

class DungeonRoomBlueprint_Chamber41 {
  constructor(width = 9, height = 9) {
    this.chamberId = 'CHAMBER_41';
    this.width = width;
    this.height = height;
    this.monsterSpawns = [
      { type: 'CYBER_DRONE_2', count: 2, level: 2 }
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

module.exports = DungeonRoomBlueprint_Chamber41;
