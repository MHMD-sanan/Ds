class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }
  pop() {
    this.elements.pop();
  }

  isPrime(element) {
      if (element < 2) return false;
      for (let i = 2; i <= Math.sqrt(element); i++){
          if (element % i === 0) return false;
      }
      return true
  }

  display() {
      for (let i = this.elements.length - 1; i >= 0; i--){
          if (this.isPrime(this.elements[i])) {
            console.log(this.elements[i]);
        }
      }
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.display();
