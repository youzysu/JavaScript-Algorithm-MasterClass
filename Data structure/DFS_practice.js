class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      }
      if (value > current.value) {
        current = current.right;
      }
      if (value === current.value) {
        found = true;
      }
    }

    if (!found) return undefined;
    return current;
  }

  contain(value) {
    if (this.root === null) return false;
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;
      }
      if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    let node = this.root;
    const nodeValues = [];
    const queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      nodeValues.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return nodeValues;
  }

  DFS_PreOrder() {
    const nodeValues = [];
    const traverse = (node) => {
      nodeValues.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return nodeValues;
  }

  DFS_PostOrder() {
    const nodeValues = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      nodeValues.push(node.value);
    };

    traverse(this.root);
    return nodeValues;
  }

  DFS_InOrder() {
    const nodeValues = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      nodeValues.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return nodeValues;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFS_PreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.DFS_PostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.DFS_InOrder()); // [ 3, 6, 8, 10, 15, 20 ]
