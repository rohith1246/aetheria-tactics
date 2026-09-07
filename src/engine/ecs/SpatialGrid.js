/**
 * SpatialGrid.js - 2D Spatial Hash Index for Broadphase Proximity Queries
 * Part of Aetheria Tactics Engine
 */

class SpatialGrid {
  constructor(cellSize = 64, width = 4096, height = 4096) {
    this.cellSize = cellSize;
    this.width = width;
    this.height = height;
    this.cols = Math.ceil(width / cellSize);
    this.rows = Math.ceil(height / cellSize);
    this.grid = new Map(); // cellKey -> Set of entityIds
    this.entityCells = new Map(); // entityId -> Set of cellKeys
  }

  _getKey(col, row) {
    return `${col}:${row}`;
  }

  insert(entityId, x, y, width = 32, height = 32) {
    this.remove(entityId);
    const startCol = Math.max(0, Math.floor(x / this.cellSize));
    const endCol = Math.min(this.cols - 1, Math.floor((x + width) / this.cellSize));
    const startRow = Math.max(0, Math.floor(y / this.cellSize));
    const endRow = Math.min(this.rows - 1, Math.floor((y + height) / this.cellSize));

    const cellKeys = new Set();
    for (let c = startCol; c <= endCol; c++) {
      for (let r = startRow; r <= endRow; r++) {
        const key = this._getKey(c, r);
        cellKeys.add(key);
        if (!this.grid.has(key)) {
          this.grid.set(key, new Set());
        }
        this.grid.get(key).add(entityId);
      }
    }
    this.entityCells.set(entityId, cellKeys);
  }

  remove(entityId) {
    const keys = this.entityCells.get(entityId);
    if (!keys) return;
    for (const key of keys) {
      const cell = this.grid.get(key);
      if (cell) {
        cell.delete(entityId);
        if (cell.size === 0) this.grid.delete(key);
      }
    }
    this.entityCells.delete(entityId);
  }

  queryRadius(centerX, centerY, radius) {
    const startCol = Math.max(0, Math.floor((centerX - radius) / this.cellSize));
    const endCol = Math.min(this.cols - 1, Math.floor((centerX + radius) / this.cellSize));
    const startRow = Math.max(0, Math.floor((centerY - radius) / this.cellSize));
    const endRow = Math.min(this.rows - 1, Math.floor((centerY + radius) / this.cellSize));

    const result = new Set();
    const rSq = radius * radius;

    for (let c = startCol; c <= endCol; c++) {
      for (let r = startRow; r <= endRow; r++) {
        const key = this._getKey(c, r);
        const cell = this.grid.get(key);
        if (cell) {
          for (const id of cell) {
            result.add(id);
          }
        }
      }
    }
    return Array.from(result);
  }

  clear() {
    this.grid.clear();
    this.entityCells.clear();
  }
}

module.exports = SpatialGrid;
