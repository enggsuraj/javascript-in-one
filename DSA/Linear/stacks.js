// STACK
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // PUSH ITEMS
  push(data) {
    this.items.push(data);
    this.count++;
  }

  // POP ITEMS
  pop(data) {
    if (this.count == 0) return undefined;
    this.items.pop(data);
    this.count--;
  }

  // TOP ELEMENT
  topElement() {
    console.log(`Top Element is ${this.items[this.count - 1]}`);
  }

  // DISPLAY
  display() {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
  }

  // CLEAR
  clear() {
    this.items = [];
    this.count = 0;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

stack.pop();

stack.display();
stack.topElement();
