/**
 * BSPDungeonGenerator.js - Recursive Binary Space Partitioning Dungeon Carver
 */

class BSPDungeonGenerator {
  constructor(width = 60, height = 40, minRoomSize = 6) {
    this.width = width;
    this.height = height;
    this.minRoomSize = minRoomSize;
    this.grid = Array.from({ length: height }, () => Array(width).fill(1)); // 1 = Wall, 0 = Floor
    this.rooms = [];
  }

  generate() {
    this.split({ x: 0, y: 0, w: this.width, h: this.height }, 4);
    this.carveCorridors();
    return { grid: this.grid, rooms: this.rooms };
  }

  split(node, depth) {
    if (depth <= 0 || (node.w < this.minRoomSize * 2 && node.h < this.minRoomSize * 2)) {
      this.createRoom(node);
      return;
    }

    const splitH = node.w > node.h ? false : node.h > node.w ? true : Math.random() > 0.5;
    if (splitH) {
      const splitAt = Math.floor(this.minRoomSize + Math.random() * (node.h - this.minRoomSize * 2));
      this.split({ x: node.x, y: node.y, w: node.w, h: splitAt }, depth - 1);
      this.split({ x: node.x, y: node.y + splitAt, w: node.w, h: node.h - splitAt }, depth - 1);
    } else {
      const splitAt = Math.floor(this.minRoomSize + Math.random() * (node.w - this.minRoomSize * 2));
      this.split({ x: node.x, y: node.y, w: splitAt, h: node.h }, depth - 1);
      this.split({ x: node.x + splitAt, y: node.y, w: node.w - splitAt, h: node.h }, depth - 1);
    }
  }

  createRoom(node) {
    const rw = Math.max(this.minRoomSize, Math.floor(node.w * 0.7));
    const rh = Math.max(this.minRoomSize, Math.floor(node.h * 0.7));
    const rx = node.x + Math.floor((node.w - rw) / 2);
    const ry = node.y + Math.floor((node.h - rh) / 2);

    for (let y = ry; y < ry + rh && y < this.height - 1; y++) {
      for (let x = rx; x < rx + rw && x < this.width - 1; x++) {
        this.grid[y][x] = 0; // Carve floor
      }
    }

    this.rooms.push({ x: rx, y: ry, w: rw, h: rh, centerX: Math.floor(rx + rw / 2), centerY: Math.floor(ry + rh / 2) });
  }

  carveCorridors() {
    for (let i = 0; i < this.rooms.length - 1; i++) {
      const r1 = this.rooms[i];
      const r2 = this.rooms[i + 1];
      let cx = r1.centerX, cy = r1.centerY;

      while (cx !== r2.centerX) {
        this.grid[cy][cx] = 0;
        cx += cx < r2.centerX ? 1 : -1;
      }
      while (cy !== r2.centerY) {
        this.grid[cy][cx] = 0;
        cy += cy < r2.centerY ? 1 : -1;
      }
    }
  }
}

module.exports = BSPDungeonGenerator;
