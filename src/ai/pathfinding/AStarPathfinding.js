/**
 * AStarPathfinding.js - Grid-Based A* & Jump Point Path Search Engine
 * Part of Aetheria Tactics Engine
 */

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift().element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

class AStarPathfinding {
  constructor(gridWidth, gridHeight, isWalkableCallback) {
    this.width = gridWidth;
    this.height = gridHeight;
    this.isWalkable = isWalkableCallback;
  }

  heuristic(a, b) {
    // Manhattan distance
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  findPath(start, goal) {
    if (!this.isWalkable(goal.x, goal.y)) return [];

    const frontier = new PriorityQueue();
    frontier.enqueue(start, 0);

    const cameFrom = new Map();
    const costSoFar = new Map();

    const startKey = `${start.x}:${start.y}`;
    cameFrom.set(startKey, null);
    costSoFar.set(startKey, 0);

    const neighbors = [
      { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }
    ];

    while (!frontier.isEmpty()) {
      const current = frontier.dequeue();
      const currentKey = `${current.x}:${current.y}`;

      if (current.x === goal.x && current.y === goal.y) {
        return this._reconstructPath(cameFrom, start, goal);
      }

      for (const offset of neighbors) {
        const next = { x: current.x + offset.x, y: current.y + offset.y };
        if (next.x < 0 || next.x >= this.width || next.y < 0 || next.y >= this.height) continue;
        if (!this.isWalkable(next.x, next.y)) continue;

        const nextKey = `${next.x}:${next.y}`;
        const newCost = costSoFar.get(currentKey) + 1;

        if (!costSoFar.has(nextKey) || newCost < costSoFar.get(nextKey)) {
          costSoFar.set(nextKey, newCost);
          const priority = newCost + this.heuristic(next, goal);
          frontier.enqueue(next, priority);
          cameFrom.set(nextKey, current);
        }
      }
    }

    return []; // No path found
  }

  _reconstructPath(cameFrom, start, goal) {
    const path = [];
    let curr = goal;
    while (curr && !(curr.x === start.x && curr.y === start.y)) {
      path.push(curr);
      const key = `${curr.x}:${curr.y}`;
      curr = cameFrom.get(key);
    }
    path.reverse();
    return path;
  }
}

module.exports = AStarPathfinding;
