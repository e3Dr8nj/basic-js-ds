const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.data = null;
    this.arr = [];
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      this.addNode(this.rootNode, data);
    }
    this.arr.push(data);
  }

  addNode(node, data) {
    if (data < node.data) {
      if (!node.left) {
        node.left = new Node(data);
      } else {
        this.addNode(node.left, data);
      }
    } else if (data > node.data) {
      if (!node.right) {
        node.right = new Node(data);
      } else {
        this.addNode(node.right, data);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (!this.rootNode) return null;
    return this._findNode(this.rootNode, data);
  }

  _findNode(node, data) {
    if (data === node.data) return node;
    if (data < node.data && node.left) {
      return this._findNode(node.left, data);
    } else if (data > node.data && node.right) {
      return this._findNode(node.right, data);
    } else {
      return null;
    }
  }

  remove(data) {
    if (this.rootNode) {
      this.rootNode = this._removeNode(this.rootNode, data);
    }
  }

  _removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let minNode = this._findMinNode(node.right);
        node.data = minNode.data;
        node.right = this._removeNode(node.right, minNode.data);
      }
    }
    return node;
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.rootNode) return null;
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) return null;
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}
/*
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/

module.exports = {
  BinarySearchTree
};