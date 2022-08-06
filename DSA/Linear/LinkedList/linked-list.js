/*

* prepend,append  - O(1) :  lookup, insert, delete - O(n)
*  head 
    |
    v
    [data | next] -> [data | next] -> [data | next]
*/


/*
//[data | next] 
class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}
class LinkedList{
    constructor(){
        this.head  = null;
    }
}

let myLinkedList = new LinkedList();
console.log(myLinkedList)

let one = new Node(10)
let two = new Node(20)
let three = new Node(30)
let four = new Node(40)
let five = new Node(50)

console.log(one)
console.log(two)
console.log(three)

myLinkedList.head = one
one.next = two
two.next = three
three.next = four
four.next = five
five.next = null

console.log(myLinkedList)

*/


// add a method remove() to the linked list that deletes a node to the specified index.

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  myLinkedList.remove(2);

console.log(myLinkedList.printList());
//[ 1, 10, 5, 16, 88 ]
  
  
  
  