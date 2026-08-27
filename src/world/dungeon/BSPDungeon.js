/**
 * BSPDungeon.js - Binary Space Partitioning Procedural Room & Corridor Generator
 * Part of Aetheria Tactics Engine
 */

class BSPNode {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = null;
    this.right = null;
    this.room = null;
    this.corridors = [];
  }

  split(minSize = 8) {
    if (this.left || this.right) return false;

    // Determine split direction
    let splitH = Math.random() > 0.5;
    if (this.width > this.height && this.width / this.height >= 1.25) {
      splitH = false;
    } else if (this.height > this.width && this.height / this.width >= 1.25) {
      splitH = true;
    }

    const max = (splitH ? this.height : this.width) - minSize;
    if (max <= minSize) return false;

    const splitPos = Math.floor(minSize + Math.random() * (max - minSize));

    if (splitH) {
      this.left = new BSPNode(this.x, this.y, this.width, splitPos);
      this.right = new BSPNode(this.x, this.y + splitPos, this.width, this.height - splitPos);
    } else {
      this.left = new BSPNode(this.x, this.y, splitPos, this.height);
      this.right = new BSPNode(this.x + splitPos, this.y, this.width - splitPos, this.height);
    }
    return true;
  }

  createRooms(minRoomSize = 5) {
    if (this.left || this.right) {
      if (this.left) this.left.createRooms(minRoomSize);
      if (this.right) this.right.createRooms(minRoomSize);
      if (this.left && this.right) {
        this.createCorridors(this.left.getRoom(), this.right.getRoom());
      }
    } else {
      const roomW = Math.max(minRoomSize, Math.floor(Math.random() * (this.width - 2)) + 3);
      const roomH = Math.max(minRoomSize, Math.floor(Math.random() * (this.height - 2)) + 3);
      const roomX = Math.floor(this.x + Math.random() * (this.width - roomW));
      const roomY = Math.floor(this.y + Math.random() * (this.height - roomH));
      this.room = { x: roomX, y: roomY, width: roomW, height: roomH };
    }
  }

  getRoom() {
    if (this.room) return this.room;
    let lRoom = this.left ? this.left.getRoom() : null;
    let rRoom = this.right ? this.right.getRoom() : null;
    if (!lRoom && !rRoom) return null;
    if (!lRoom) return rRoom;
    if (!rRoom) return lRoom;
    return Math.random() > 0.5 ? lRoom : rRoom;
  }

  createCorridors(lRoom, rRoom) {
    if (!lRoom || !rRoom) return;
    const pt1 = {
      x: Math.floor(lRoom.x + lRoom.width / 2),
      y: Math.floor(lRoom.y + lRoom.height / 2)
    };
    const pt2 = {
      x: Math.floor(rRoom.x + rRoom.width / 2),
      y: Math.floor(rRoom.y + rRoom.height / 2)
    };

    if (Math.random() > 0.5) {
      this.corridors.push({ x1: pt1.x, y1: pt1.y, x2: pt2.x, y2: pt1.y });
      this.corridors.push({ x1: pt2.x, y1: pt1.y, x2: pt2.x, y2: pt2.y });
    } else {
      this.corridors.push({ x1: pt1.x, y1: pt1.y, x2: pt1.x, y2: pt2.y });
      this.corridors.push({ x1: pt1.x, y1: pt2.y, x2: pt2.x, y2: pt2.y });
    }
  }
}

class BSPDungeon {
  constructor(width = 64, height = 64, iterations = 4) {
    this.width = width;
    this.height = height;
    this.iterations = iterations;
    this.grid = Array.from({ length: height }, () => new Uint8Array(width)); // 0: wall, 1: floor
  }

  generate() {
    const root = new BSPNode(0, 0, this.width, this.height);
    const nodes = [root];

    for (let i = 0; i < this.iterations; i++) {
      const len = nodes.length;
      for (let j = 0; j < len; j++) {
        const node = nodes[j];
        if (!node.left && !node.right) {
          if (node.split(8)) {
            nodes.push(node.left);
            nodes.push(node.right);
          }
        }
      }
    }

    root.createRooms(5);
    this._carveRooms(nodes);
    this._carveCorridors(nodes);
    return this.grid;
  }

  _carveRooms(nodes) {
    for (const node of nodes) {
      if (node.room) {
        for (let y = node.room.y; y < node.room.y + node.room.height; y++) {
          for (let x = node.room.x; x < node.room.x + node.room.width; x++) {
            if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
              this.grid[y][x] = 1;
            }
          }
        }
      }
    }
  }

  _carveCorridors(nodes) {
    for (const node of nodes) {
      for (const corr of node.corridors) {
        const minX = Math.min(corr.x1, corr.x2);
        const maxX = Math.max(corr.x1, corr.x2);
        const minY = Math.min(corr.y1, corr.y2);
        const maxY = Math.max(corr.y1, corr.y2);

        for (let x = minX; x <= maxX; x++) {
          for (let y = minY; y <= maxY; y++) {
            if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
              this.grid[y][x] = 1;
            }
          }
        }
      }
    }
  }
}

module.exports = BSPDungeon;
