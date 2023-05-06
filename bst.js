class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.elements = {};
    this.rear = 0;
    this.front = 0;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertHelper(newNode, this.root);
    }
  }
  insertHelper(newNode, currentNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertHelper(newNode, currentNode.left);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertHelper(newNode, currentNode.right);
      }
    }
  }

  contains(value) {
    return this.containsHelper(value, this.root);
  }
  containsHelper(value, currentNode) {
    if (currentNode === null) return false;
    if (currentNode.value === value) {
      return true;
    } else if (value < currentNode.value) {
      return this.containsHelper(value, currentNode.left);
    } else {
      return this.containsHelper(value, currentNode.right);
    }
  }
  preOrder() {
    this.preOrderHelper(this.root);
  }
  preOrderHelper(currentNode) {
    if (currentNode) {
      console.log(currentNode.value);
      this.preOrderHelper(currentNode.left);
      this.preOrderHelper(currentNode.right);
    }
  }
  inOrder() {
    this.inOrderHelper(this.root);
  }
  inOrderHelper(currentNode) {
    if (currentNode) {
      this.inOrderHelper(currentNode.left);
      console.log(currentNode.value);
      this.inOrderHelper(currentNode.right);
    }
  }
  postOrder() {
    this.postOrderHelper(this.root);
  }
  postOrderHelper(currentNode) {
    if (currentNode) {
      this.postOrderHelper(currentNode.left);
      this.postOrderHelper(currentNode.right);
      console.log(currentNode.value);
    }
  }
  bfs() {
    if (this.root) {
      this.enqueue(this.root);
      while (this.isEmpty()) {
        let currentNode = this.dequeue();
        console.log(currentNode?.value);
        if (currentNode.left) this.enqueue(currentNode.left);
        if (currentNode.right) this.enqueue(currentNode.right);
      }
    }
  }

  dequeue() {
    const currentNode = this.elements[this.front];
    delete this.elements[this.front];
    this.front++;
    return currentNode;
  }
  isEmpty() {
    if (this.rear - this.front === 0) {
      return false;
    } else {
      return true;
    }
  }
  enqueue(data) {
    this.elements[this.rear] = data;
    this.rear++;
  }
  // find min value from bst
  getMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  //find max value from bst
  getMax(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  delete(value) {
    this.root = this.deleteHelper(value, this.root);
  }
  deleteHelper(value, node) {
    if (node === null) return node;
    if (value < node.value) {
      node.left = this.deleteHelper(value, node.left);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteHelper(value, node.right);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const inOrderSuccessor = this.getMin(node.right);
        console.log(inOrderSuccessor.value);
        node.data = inOrderSuccessor.value;
        node.right = this.deleteHelper(inOrderSuccessor.value, node.right);
        return node;
      }
    }
  }
  // find closest value to a number in bst
  closestValue(number) {
    return this.closestValueHelper(this.root, number, this.root.value);
  }
  closestValueHelper(node, number, closest) {
    if (!node) {
      return closest;
    }
    if (Math.abs(number - node.value) < Math.abs(number - closest)) {
      closest = node.value;
    }
    if (number < node.value) {
      return this.closestValueHelper(node.left, number, closest);
    } else if (number > node.value) {
      return this.closestValueHelper(node.right, number, closest);
    } else {
      return closest;
    }
  }

  isValidBst() {
    return this.isValidBstHelper(this.root, -Infinity, Infinity);
  }
  isValidBstHelper(node, min, max) {
    if (!node) return true;
    if (node.data <= min || node.data > max) return false;
    return (
      this.isValidBstHelper(node.left, min, node.data) &&
      this.isValidBstHelper(node.right, node.data, max)
    );
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);
bst.insert(14);
console.log("Pre-Order");
bst.preOrder();
console.log("In-Order");
bst.inOrder();
console.log("Post-Order");
bst.postOrder();
console.log("BFS traversal");
bst.bfs();
console.log("closest value is ");
console.log(bst.closestValue(7));
console.log(bst.isValidBst());
