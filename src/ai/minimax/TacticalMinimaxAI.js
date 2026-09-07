/**
 * TacticalMinimaxAI.js - Adversarial Game Tree Search with Alpha-Beta Pruning
 * Part of Aetheria Tactics Engine
 */

class TacticalMinimaxAI {
  constructor(maxDepth = 3) {
    this.maxDepth = maxDepth;
  }

  evaluateState(gameState, isMaximizingPlayer) {
    const player = gameState.player || gameState.friendlyUnits?.[0] || { hp: 100, x: 0, y: 0 };
    const enemies = gameState.enemies || gameState.enemyUnits || [{ hp: 100, x: 5, y: 5 }];
    const pHP = player.hp || 0;
    const eHP = enemies.reduce((sum, e) => sum + (e.hp || 0), 0);
    const posDist = enemies[0] ? Math.abs(player.x - enemies[0].x) + Math.abs(player.y - enemies[0].y) : 0;
    return (pHP * 2) - (eHP * 1.5) - (posDist * 0.5);
  }

  minimax(gameState, depth, alpha, beta, isMaximizing) {
    const player = gameState.player || gameState.friendlyUnits?.[0] || { hp: 100, x: 0, y: 0 };
    const enemies = gameState.enemies || gameState.enemyUnits || [{ hp: 100, x: 5, y: 5 }];

    if (depth === 0 || player.hp <= 0 || enemies.length === 0) {
      return { score: this.evaluateState(gameState, isMaximizing), bestMove: null };
    }

    if (isMaximizing) {
      let maxEval = -Infinity;
      let bestMove = null;
      const possibleMoves = ['STRIKE', 'SHIELD', 'FLANK'];

      for (const move of possibleMoves) {
        const nextState = JSON.parse(JSON.stringify(gameState));
        const pTarget = nextState.player || nextState.friendlyUnits?.[0];
        const eTarget = nextState.enemies?.[0] || nextState.enemyUnits?.[0];

        if (move === 'STRIKE' && eTarget) eTarget.hp -= 40;
        else if (move === 'SHIELD' && pTarget) pTarget.hp += 20;

        const evalResult = this.minimax(nextState, depth - 1, alpha, beta, false);
        if (evalResult.score > maxEval) {
          maxEval = evalResult.score;
          bestMove = move;
        }
        alpha = Math.max(alpha, evalResult.score);
        if (beta <= alpha) break; // Beta cut-off
      }
      return { score: maxEval, bestMove };
    } else {
      let minEval = Infinity;
      let bestMove = null;
      const enemyMoves = ['ATTACK', 'DEFEND'];

      for (const move of enemyMoves) {
        const nextState = JSON.parse(JSON.stringify(gameState));
        const pTarget = nextState.player || nextState.friendlyUnits?.[0];

        if (move === 'ATTACK' && pTarget) pTarget.hp -= 30;

        const evalResult = this.minimax(nextState, depth - 1, alpha, beta, true);
        if (evalResult.score < minEval) {
          minEval = evalResult.score;
          bestMove = move;
        }
        beta = Math.min(beta, evalResult.score);
        if (beta <= alpha) break; // Alpha cut-off
      }
      return { score: minEval, bestMove };
    }
  }

  getBestAction(gameState) {
    const res = this.minimax(gameState, this.maxDepth, -Infinity, Infinity, true);
    return res.bestMove || 'STRIKE';
  }
}

module.exports = TacticalMinimaxAI;
