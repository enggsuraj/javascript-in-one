// Print the Middle of a given linked list

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

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let current = this.head;
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  //removeAt
  removeAt(index) {
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      previous.next = current.next;
      this.size--;
    }
  }

  // middle of LL
  middle() {
    let current = this.head;
    for (let i = 0; i < parseInt(this.size - 1) / 2; i++) {
      current = current.next;
    }
    console.log(current.data);
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(3);

ll.display();
console.log("-------");
ll.removeAt(2);
ll.display();
