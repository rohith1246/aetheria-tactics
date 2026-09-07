/**
 * BehaviorTreeEngine.js - Hierarchical Behavior Tree AI Evaluation Engine
 * Part of Aetheria Tactics Engine
 */

const NodeStatus = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  RUNNING: 'RUNNING'
};

class BTNode {
  constructor(name = 'BTNode') {
    this.name = name;
  }

  evaluate(blackboard) {
    throw new Error('evaluate() must be implemented by subclass');
  }
}

class Selector extends BTNode {
  constructor(children = [], name = 'Selector') {
    super(name);
    this.children = children;
  }

  evaluate(blackboard) {
    for (const child of this.children) {
      const status = child.evaluate(blackboard);
      if (status === NodeStatus.SUCCESS || status === NodeStatus.RUNNING) {
        return status;
      }
    }
    return NodeStatus.FAILURE;
  }
}

class Sequence extends BTNode {
  constructor(children = [], name = 'Sequence') {
    super(name);
    this.children = children;
  }

  evaluate(blackboard) {
    for (const child of this.children) {
      const status = child.evaluate(blackboard);
      if (status === NodeStatus.FAILURE || status === NodeStatus.RUNNING) {
        return status;
      }
    }
    return NodeStatus.SUCCESS;
  }
}

class ConditionNode extends BTNode {
  constructor(predicateFn, name = 'Condition') {
    super(name);
    this.predicateFn = predicateFn;
  }

  evaluate(blackboard) {
    return this.predicateFn(blackboard) ? NodeStatus.SUCCESS : NodeStatus.FAILURE;
  }
}

class ActionNode extends BTNode {
  constructor(actionFn, name = 'Action') {
    super(name);
    this.actionFn = actionFn;
  }

  evaluate(blackboard) {
    return this.actionFn(blackboard);
  }
}

module.exports = {
  NodeStatus,
  BTNode,
  Selector,
  Sequence,
  ConditionNode,
  ActionNode
};
