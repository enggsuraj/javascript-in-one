// QUEUE
class Queue {
  constructor() {
    this.items = [];
  }

  // ADD ELEMENT
  add(data) {
    this.items.push(data);
  }

  // REMOVE
  remove() {
    this.items.shift();
  }

  // DISPLAY
  display() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

const queue = new Queue();
queue.add(100);
queue.add(200);
queue.add(300);

queue.display();

queue.remove();

queue.display();
