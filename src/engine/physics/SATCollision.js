/**
 * SATCollision.js - Separating Axis Theorem Polygon Collision & MTV Resolution
 * Part of Aetheria Tactics Engine
 */

class SATCollision {
  static _toPoint(p) {
    if (Array.isArray(p)) return { x: p[0], y: p[1] };
    return { x: p.x, y: p.y };
  }

  static getAxes(polygon) {
    const axes = [];
    for (let i = 0; i < polygon.length; i++) {
      const p1 = this._toPoint(polygon[i]);
      const p2 = this._toPoint(polygon[(i + 1) % polygon.length]);
      const edge = { x: p2.x - p1.x, y: p2.y - p1.y };
      // Normal vector (-dy, dx)
      const normal = { x: -edge.y, y: edge.x };
      const len = Math.hypot(normal.x, normal.y) || 1;
      axes.push({ x: normal.x / len, y: normal.y / len });
    }
    return axes;
  }

  static project(polygon, axis) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < polygon.length; i++) {
      const p = this._toPoint(polygon[i]);
      const dot = p.x * axis.x + p.y * axis.y;
      if (dot < min) min = dot;
      if (dot > max) max = dot;
    }
    return { min, max };
  }

  static checkCollision(polyA, polyB) {
    const axes = [...this.getAxes(polyA), ...this.getAxes(polyB)];
    let minOverlap = Infinity;
    let smallestAxis = null;

    for (const axis of axes) {
      const projA = this.project(polyA, axis);
      const projB = this.project(polyB, axis);

      if (projA.max < projB.min || projB.max < projA.min) {
        return { collided: false, overlap: 0, mtv: null }; // Separating axis found
      }

      const overlap = Math.min(projA.max, projB.max) - Math.max(projA.min, projB.min);
      if (overlap < minOverlap) {
        minOverlap = overlap;
        smallestAxis = axis;
      }
    }

    return {
      collided: true,
      overlap: minOverlap,
      mtv: smallestAxis ? { x: smallestAxis.x * minOverlap, y: smallestAxis.y * minOverlap } : { x: 0, y: 0 }
    };
  }

  static checkPolygonPolygon(polyA, polyB) {
    return this.checkCollision(polyA, polyB);
  }
}

module.exports = SATCollision;
