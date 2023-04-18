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

  printList() {
    let tempPointer = this.head;
    let values = "";
    while (tempPointer) {
      values = values + `${tempPointer.value} `;
      tempPointer = tempPointer.next;
    }
      console.log(values);
  }
}

const list = new LinkList();
list.arrayToLinklist();
list.printList();
