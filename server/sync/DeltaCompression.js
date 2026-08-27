/**
 * DeltaCompression.js - Network State Quantization & Snapshot Compression
 * Part of Aetheria Tactics Engine
 */

class DeltaCompression {
  static createSnapshot(state) {
    return {
      timestamp: Date.now(),
      entities: state.entities.map(e => ({
        id: e.id,
        x: Math.round(e.x * 100) / 100,
        y: Math.round(e.y * 100) / 100,
        hp: e.hp,
        ap: e.ap,
        state: e.state
      }))
    };
  }

  static computeDelta(prevSnapshot, currSnapshot) {
    if (!prevSnapshot) return currSnapshot;

    const delta = {
      timestamp: currSnapshot.timestamp,
      updated: [],
      removed: []
    };

    const prevMap = new Map(prevSnapshot.entities.map(e => [e.id, e]));
    const currMap = new Map(currSnapshot.entities.map(e => [e.id, e]));

    for (const [id, curr] of currMap.entries()) {
      const prev = prevMap.get(id);
      if (!prev) {
        delta.updated.push(curr);
      } else {
        const changes = { id };
        let hasChanges = false;
        if (prev.x !== curr.x || prev.y !== curr.y) {
          changes.x = curr.x;
          changes.y = curr.y;
          hasChanges = true;
        }
        if (prev.hp !== curr.hp) {
          changes.hp = curr.hp;
          hasChanges = true;
        }
        if (prev.ap !== curr.ap) {
          changes.ap = curr.ap;
          hasChanges = true;
        }
        if (prev.state !== curr.state) {
          changes.state = curr.state;
          hasChanges = true;
        }
        if (hasChanges) delta.updated.push(changes);
      }
    }

    for (const id of prevMap.keys()) {
      if (!currMap.has(id)) {
        delta.removed.push(id);
      }
    }

    return delta;
  }
}

module.exports = DeltaCompression;
