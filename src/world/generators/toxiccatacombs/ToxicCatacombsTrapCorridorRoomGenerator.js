/**
 * ToxicCatacombsTrapCorridorRoomGenerator.js
 * Procedural Room Generator for ToxicCatacombs biome with TrapCorridor dimensions.
 */

class ToxicCatacombsTrapCorridorRoomGenerator {
  constructor(seed = Date.now()) {
    this.seed = seed;
    this.theme = 'ToxicCatacombs';
    this.sizeCategory = 'TrapCorridor';
    this.width = 30;
    this.height = 23;
    this.obstacleDensity = 0.39;
  }

  generateRoomLayout() {
    const grid = [];
    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {
          row.push({ type: 'WALL', passable: false, cover: 'FULL' });
        } else {
          const rand = Math.random();
          if (rand < this.obstacleDensity) {
            row.push({ type: 'OBSTACLE', passable: false, cover: 'HALF' });
          } else if (rand < this.obstacleDensity + 0.05) {
            row.push({ type: 'HAZARD', passable: true, hazardType: 'toxiccatacombs_trap' });
          } else {
            row.push({ type: 'FLOOR', passable: true, cover: 'NONE' });
          }
        }
      }
      grid.push(row);
    }

    this.carveDoorways(grid);
    this.placeSpawnPoints(grid);
    return {
      theme: this.theme,
      dimensions: { width: this.width, height: this.height },
      tiles: grid,
      spawns: this.spawnPoints,
      doors: this.doorways
    };
  }

  carveDoorways(grid) {
    this.doorways = [
      { x: Math.floor(this.width / 2), y: 0, orientation: 'NORTH' },
      { x: Math.floor(this.width / 2), y: this.height - 1, orientation: 'SOUTH' },
      { x: 0, y: Math.floor(this.height / 2), orientation: 'WEST' },
      { x: this.width - 1, y: Math.floor(this.height / 2), orientation: 'EAST' }
    ];
    this.doorways.forEach(d => {
      grid[d.y][d.x] = { type: 'DOOR', passable: true, state: 'CLOSED' };
    });
  }

  placeSpawnPoints(grid) {
    this.spawnPoints = [];
    const count = 3;
    for (let i = 0; i < count; i++) {
      const sx = 2 + Math.floor(Math.random() * (this.width - 4));
      const sy = 2 + Math.floor(Math.random() * (this.height - 4));
      if (grid[sy][sx].passable) {
        this.spawnPoints.push({ x: sx, y: sy, team: i % 2 === 0 ? 'ALLY' : 'ENEMY' });
      }
    }
  }
}

module.exports = { ToxicCatacombsTrapCorridorRoomGenerator };
