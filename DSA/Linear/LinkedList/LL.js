// LINKED LIST

// Linear Data Structure
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// MAIN
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // INSERT FIRST NODE
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // INSERT LAST NODE
  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // INSERT AT INDEX
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // GET A INDEX
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // REMOVE AT INDEX
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // CLEAR LIST
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //reverse LL
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

  // middle of LL
  middle() {
    let current = this.head;
    for (let i = 0; i < (this.size - 1) / 2; i++) {
      current = current.next;
    }
    console.log(current.data);
  }

  // GIVEN IS NODE VALUE
  searchByDataValue(target) {
    let current = this.head;
    let index = 0;
    while (current.data != target) {
      index++;
      console.log(current.data);
      current = current.next;
    }
    console.log(index);
  }

  // PRINT LIST DATA
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 4);
ll.getAt(3);
ll.removeAt(2);
ll.clearList();
console.log(ll.printListData());
