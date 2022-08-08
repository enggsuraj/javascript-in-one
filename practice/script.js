// Linked List

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insertFirst
  insertFirst(data) {
    let current = this.head;
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  //insertLast
  insertLast(data) {
    let current = this.head;
    let node = new Node(data);
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  //insertAt
  insertAt() {}

  //search
  search(target) {
    let current = this.head;
    while (current) {
      if (current.data === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //nodeValueAtIndex
  nodeValueAtIndex(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    console.log(current.data);
  }

  //reverse
  reverse() {
    let previous = null;
    let current = this.head;
    let nxt;

    while (current) {
      nxt = current.next;
      current.next = previous;
      previous = current;
      current = nxt; // similar to current=current.next
    }
    return previous;
  }

  //display
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    this.size++;
  }
}

const ll = new LinkedList();

ll.insertLast("A");
ll.insertLast("B");
ll.insertLast("C");
ll.insertLast("D");
ll.insertLast("E");

//console.log(ll.search("CS"));
// ll.display();
ll.display();

console.log("-------------");

// ll.nodeValueAtIndex(5);
console.log(ll.reverse());
