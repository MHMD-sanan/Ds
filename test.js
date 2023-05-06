class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // inserts a new node with the given data into the tree
    insert(data) {
      let newNode = new Node(data);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    // recursively inserts a new node into the tree
    _insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // finds the closest value to the given number in the tree
    findClosestValue(number) {
      return this._findClosestValueHelper(this.root, number, this.root.data);
    }
  
    // recursively searches the tree for the closest value to the given number
    _findClosestValueHelper(node, number, closest) {
      if (!node) {
        return closest;
      }
  
      if (Math.abs(number - node.data) < Math.abs(number - closest)) {
        closest = node.data;
      }
  
      if (number < node.data) {
        return this._findClosestValueHelper(node.left, number, closest);
      } else if (number > node.data) {
        return this._findClosestValueHelper(node.right, number, closest);
      } else {
        return closest;
      }
    }
  }
  
  // example usage
  let bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(2);
  bst.insert(5);
  bst.insert(13);
  bst.insert(22);
  bst.insert(1);
  bst.insert(14);
  
  console.log(bst.findClosestValue(12)); 