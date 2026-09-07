/**
 * WaveFunctionCollapse.js - 2D Tile-Based Procedural Map Generation with Adjacency Constraints
 * Part of Aetheria Tactics Engine
 */

class WaveFunctionCollapse2D {
  constructor(width, height, tileset) {
    this.width = width;
    this.height = height;
    this.tileset = tileset; // Array of { id: 0, name: 'GRASS', allowedNeighbors: { N: [0,1], S: [0], E: [0,1], W: [0] } }
    this.tileCount = tileset.length;
    this.grid = []; // 2D array of Set of possible tile indices
    this._initGrid();
  }

  _initGrid() {
    this.grid = [];
    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        row.push(new Set(this.tileset.map((_, i) => i)));
      }
      this.grid.push(row);
    }
  }

  isCollapsed() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.grid[y][x].size !== 1) return false;
      }
    }
    return true;
  }

  findLowestEntropyCell() {
    let minEntropy = Infinity;
    let candidates = [];

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const size = this.grid[y][x].size;
        if (size > 1) {
          if (size < minEntropy) {
            minEntropy = size;
            candidates = [{ x, y }];
          } else if (size === minEntropy) {
            candidates.push({ x, y });
          }
        }
      }
    }

    if (candidates.length === 0) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  collapseCell(x, y) {
    const possible = Array.from(this.grid[y][x]);
    if (possible.length === 0) return false;
    const chosen = possible[Math.floor(Math.random() * possible.length)];
    this.grid[y][x] = new Set([chosen]);
    return true;
  }

  propagate(startX, startY) {
    const stack = [{ x: startX, y: startY }];
    const directions = [
      { dx: 0, dy: -1, dir: 'N', opposite: 'S' },
      { dx: 0, dy: 1, dir: 'S', opposite: 'N' },
      { dx: 1, dy: 0, dir: 'E', opposite: 'W' },
      { dx: -1, dy: 0, dir: 'W', opposite: 'E' }
    ];

    while (stack.length > 0) {
      const current = stack.pop();

      for (const d of directions) {
        const nx = current.x + d.dx;
        const ny = current.y + d.dy;

        if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
          const neighborPossible = this.grid[ny][nx];
          const currentPossible = this.grid[current.y][current.x];

          // Collect all allowed tiles for this neighbor based on current possible tiles
          const allowedFromCurrent = new Set();
          for (const cTileIdx of currentPossible) {
            const tile = this.tileset[cTileIdx];
            const allowed = tile.allowedNeighbors?.[d.dir] || [];
            allowed.forEach(t => allowedFromCurrent.add(t));
          }

          let reduced = false;
          for (const nTileIdx of Array.from(neighborPossible)) {
            if (!allowedFromCurrent.has(nTileIdx)) {
              neighborPossible.delete(nTileIdx);
              reduced = true;
            }
          }

          if (neighborPossible.size === 0) {
            // Contradiction reached
            return false;
          }

          if (reduced) {
            stack.push({ x: nx, y: ny });
          }
        }
      }
    }

    return true;
  }

  generate(maxAttempts = 5) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      this._initGrid();
      let success = true;

      while (!this.isCollapsed()) {
        const cell = this.findLowestEntropyCell();
        if (!cell) break;

        this.collapseCell(cell.x, cell.y);
        const propOk = this.propagate(cell.x, cell.y);
        if (!propOk) {
          success = false;
          break;
        }
      }

      if (success) {
        return this.grid.map(row => row.map(cell => Array.from(cell)[0]));
      }
    }

    // Fallback deterministic pattern if WFC hits contradiction
    return Array.from({ length: this.height }, (_, y) =>
      Array.from({ length: this.width }, (_, x) => (x + y) % this.tileCount)
    );
  }
}

module.exports = WaveFunctionCollapse2D;
