/**
 * CanvasRenderer.js - 2D Grid & Sprite Rendering Engine with Viewport Transform
 * Part of Aetheria Tactics Engine
 */

class CanvasRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext('2d') : null;
    this.camera = { x: 0, y: 0, zoom: 1.0 };
    this.tileSize = 32;
  }

  setCameraPosition(x, y) {
    this.camera.x = x;
    this.camera.y = y;
  }

  setZoom(zoom) {
    this.camera.zoom = Math.max(0.25, Math.min(3.0, zoom));
  }

  worldToScreen(worldX, worldY) {
    const screenX = (worldX - this.camera.x) * this.camera.zoom + (this.canvas ? this.canvas.width / 2 : 0);
    const screenY = (worldY - this.camera.y) * this.camera.zoom + (this.canvas ? this.canvas.height / 2 : 0);
    return { x: screenX, y: screenY };
  }

  screenToWorld(screenX, screenY) {
    const worldX = (screenX - (this.canvas ? this.canvas.width / 2 : 0)) / this.camera.zoom + this.camera.x;
    const worldY = (screenY - (this.canvas ? this.canvas.height / 2 : 0)) / this.camera.zoom + this.camera.y;
    return { x: worldX, y: worldY };
  }

  clear(color = '#0b0f19') {
    if (!this.ctx) return;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

module.exports = CanvasRenderer;
