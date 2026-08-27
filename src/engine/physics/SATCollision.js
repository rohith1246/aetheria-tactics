/**
 * SATCollision.js - Separating Axis Theorem & Convex Polygon Intersection
 * Part of Aetheria Tactics Engine
 */

const { Vector2D } = require('../math/Math2D');

class SATCollision {
  static checkPolygonPolygon(polyA, polyB) {
    let minOverlap = Infinity;
    let smallestAxis = null;

    const axes = [...this.getAxes(polyA), ...this.getAxes(polyB)];

    for (let i = 0; i < axes.length; i++) {
      const axis = axes[i];
      const p1 = this.project(polyA, axis);
      const p2 = this.project(polyB, axis);

      if (!this.overlaps(p1, p2)) {
        return { collided: false };
      } else {
        const overlap = this.getOverlap(p1, p2);
        if (overlap < minOverlap) {
          minOverlap = overlap;
          smallestAxis = axis;
        }
      }
    }

    return {
      collided: true,
      overlap: minOverlap,
      axis: smallestAxis
    };
  }

  static getAxes(polygon) {
    const axes = [];
    for (let i = 0; i < polygon.length; i++) {
      const p1 = polygon[i];
      const p2 = polygon[(i + 1) % polygon.length];
      const edge = new Vector2D(p1.x - p2.x, p1.y - p2.y);
      const normal = new Vector2D(-edge.y, edge.x).normalize();
      axes.push(normal);
    }
    return axes;
  }

  static project(polygon, axis) {
    let min = axis.dot(polygon[0]);
    let max = min;
    for (let i = 1; i < polygon.length; i++) {
      const p = axis.dot(polygon[i]);
      if (p < min) min = p;
      if (p > max) max = p;
    }
    return { min, max };
  }

  static overlaps(p1, p2) {
    return !(p1.max < p2.min || p2.max < p1.min);
  }

  static getOverlap(p1, p2) {
    return Math.min(p1.max, p2.max) - Math.max(p1.min, p2.min);
  }

  static checkCircleCircle(c1, c2) {
    const dx = c1.x - c2.x;
    const dy = c1.y - c2.y;
    const distSq = dx * dx + dy * dy;
    const rSum = c1.radius + c2.radius;
    if (distSq <= rSum * rSum) {
      const dist = Math.sqrt(distSq);
      return {
        collided: true,
        overlap: rSum - dist,
        axis: dist > 0 ? new Vector2D(dx / dist, dy / dist) : new Vector2D(1, 0)
      };
    }
    return { collided: false };
  }
}

module.exports = SATCollision;
