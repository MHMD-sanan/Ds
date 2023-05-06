class Queue {
  constructor() {
    this.elements = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.elements[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    delete this.elements[this.front];
    this.front++;
  }
  display() {
    console.log(this.elements);
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
queue.dequeue();
queue.display();
