class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      let tempPointer = this.head;
      while (tempPointer.next) {
        tempPointer = tempPointer.next;
      }
      tempPointer.next = node;
    }
    this.size++;
  }
  // O(index);
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("cant insert at this position");
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let tempPointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        tempPointer = tempPointer.next;
      }

      node.next = tempPointer.next;
      tempPointer.next = node;
      this.size++;
    }
  }

  removeByIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("this deletion is not allowed");
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = removeNode.next;
    } else {
      let tempPointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        tempPointer = tempPointer.next;
      }
      removeNode = tempPointer.next;
      tempPointer.next = removeNode.next;
    }
    this.size--;
  }
  //   O(n)
  removeByValue(value) {
    if (this.size === 0) {
      console.log("list is empty");
    }
    if (value === this.head.value) {
      this.head = this.head.next;
      this.size--;
      console.log(`${value} has been deleted`);
    } else {
      let tempPointer = this.head;
      while (tempPointer.next && tempPointer.next.value !== value) {
        tempPointer = tempPointer.next;
      }
      if (tempPointer.next) {
        const removeNode = tempPointer.next;
        tempPointer.next = removeNode.next;
        this.size--;
        console.log(`${value} has been deleted`);
      } else {
        console.log("this is element is not found");
      }
    }
  }

  searchByValue(value) {
    if (this.size === 0) {
      return console.log("list is empty");
    }
    let tempPointer = this.head;
    while (tempPointer) {
      if (tempPointer.value === value) {
        return console.log("This number is present");
      }
      tempPointer = tempPointer.next;
    }
    return console.log("This element is not found");
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  arrayToLinklist() {
    const arr = [1, 2, 3, 4, 5];
    arr.forEach((item) => {
      const node = new Node(item);
      if (this.size === 0) {
        this.head = node;
      } else {
        let tempPointer = this.head;
        while (tempPointer.next) {
          tempPointer = tempPointer.next;
        }
        tempPointer.next = node;
      }
      this.size++;
    });
  }

  // O(n)
  printList() {
    if (this.size == 0) {
      console.log("list is empty");
    } else {
      let tempPointer = this.head;
      let listItems = "";
      while (tempPointer) {
        listItems += `${tempPointer.value} `;
        tempPointer = tempPointer.next;
      }
      console.log(listItems);
    }
  }
}

const list = new LinkList();
list.printList();
list.append(10);
list.append(20);
list.append(30);
list.printList();
list.reverse();
list.printList();
