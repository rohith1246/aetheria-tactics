# aetheria-tactics

Tactical RPG Engine & Procedural Map Generation

---

## Installation

```bash
cd aetheria-tactics
npm install
```

---

## Build

```bash
npm run build
docker build -t aetheria-tactics:latest .
```

---

## Run

```bash
npm start
docker-compose up -d
```

---

## Dependencies

- **Runtime**: Node.js Standard Library (>= 18.0.0)
- **Architecture**: Modular domain engines with zero external unverified dependencies

---

## Usage

Access the application and endpoints locally on port **3000**.

---

## Testing & Coverage

```bash
npm test
npm run test:coverage
```


# 🎮 Aetheria Tactics: 2D Tactical Cyberpunk / Roguelike Engine

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/rohith1246/aetheria-tactics)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue.svg)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)](#license)
[![Architecture](https://img.shields.io/badge/architecture-64--bit%20Bitmask%20ECS%20%2F%20SAT-purple.svg)](#architecture)

Aetheria Tactics is a high-performance 2D tactical cyberpunk roguelike game engine featuring a 64-bit Bitmask Entity Component System (ECS), Separating Axis Theorem (SAT) convex collision physics, Binary Space Partitioning (BSP) dungeon generation, A* pathfinding, and procedural WebAudio sound synthesis.

---

## 🏛️ System Architecture

```text
+─────────────────────────────────────────────────────────────+
|               SystemScheduler Engine Loop                   |
+─────────────────────────────────────────────────────────────+
                               |
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
+──────────────+       +──────────────+       +──────────────+
| 64-Bit ECS   |       | SAT Physics  |       | A* Pathing   |
| Architecture |       | & Collisions |       | & Navigation |
+──────────────+       +──────────────+       +──────────────+
                               |
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
+──────────────+       +──────────────+       +──────────────+
| BSP Dungeon  |       | Crafting &   |       | Procedural   |
| Generation   |       | Affix Engine |       | Audio Synth  |
+──────────────+       +──────────────+       +──────────────+
```

---

## 🚀 Key Engineering Features

### 1. 64-Bit Bitmask Entity Component System (ECS)
* **Zero-Allocation Queries:** Bitwise component masks allowing constant-time $\mathcal{O}(1)$ entity signature filtering.
* **Spatial Grid Indexing:** Broadphase spatial hash grid reducing collision checks from $\mathcal{O}(N^2)$ to $\mathcal{O}(N)$.

### 2. Separating Axis Theorem (SAT) Physics
* **Arbitrary Convex Polygons:** Exact penetration depth and Minimum Translation Vector (MTV) computation for angled obstacles.

### 3. Procedural World Generation
* **BSP Dungeon Carving:** Recursively partitions dungeon space with minimum room size constraints and hallway corridors.
* **Perlin Noise Heightmaps:** Generates procedural terrain biomes with tilemap collision masks.

### 4. Rich RPG Economy & Affix Engine
* **700+ Equipment Affixes:** Tiered prefix and suffix modifiers with scaling attribute rolls.
* **Sound Synthesizer:** Procedural WebAudio frequency modulation synthesizer creating retro sound effects without external audio files.

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/rohith1246/aetheria-tactics.git
cd aetheria-tactics

# Run all 8 test suites
npm test

# Launch Game Engine Server & Canvas UI
npm start
```
Open your browser to `http://localhost:3000` to play the tactical grid engine!

---

## 🔒 License
Proprietary & Confidential. All rights reserved by `rohith1246`.
