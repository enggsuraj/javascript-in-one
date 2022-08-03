/* 

* HASH TABLES - HASH MAPS - DICTIONARIES - OBJECTS
* OBJECTS IN JS ARE TYPE OF HASH TABLES, Dictionaries in python are hash tables
* While JavaScript doesn’t have a native Hashtable class, it does have native Objects and Hashmaps(Map) 
  that offer similar functionality when it comes to organizing key/value pairs.

* https://www.miraclesalad.com/webtools/md5.php
* eg: hi = 49f68a5c8493ec2c0bf489821c21fc3b
* insert,delete,search,lookup -> O(1)

* https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257
* One of the primary benefits that a hashtable has over a hashmap is the native ability to handle synchronous updates. 

* This means that a hashtable can be shared by multiple threads without introducing desynching errors.
* Hashmaps offer the same key/value functionality and come native in JavaScript (ES6) in the form of the Map() object (not to be confused with Array.prototype.map()). 
* While hashmaps are limited to single-threaded code, they do have some benefits, for instance the allowance of null values which allows for greater flexibility.

* https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/

*/

//CREATE HASH FUNCTION
//The perfect hash function is the one that for every key it assigns a unique index.
class NaiveHashMap {

    constructor(initialCapacity = 2) {
      this.buckets = new Array(initialCapacity);
    }
  
    set(key, value) {
      const index = this.getIndex(key);
      this.buckets[index] = value;
    }
  
    get(key) {
      const index = this.getIndex(key);
      return this.buckets[index];
    }
  
    hash(key) {
      return key.toString().length;
    }
  
    getIndex(key) {
      const indexHash = this.hash(key);
      const index = indexHash % this.buckets.length;
      return index;
    }
  } 

// Usage:
const assert = require('assert');
const hashMap = new NaiveHashMap();

hashMap.set('cat', 2);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
hashMap.set('art', 8);

console.log(hashMap.buckets);

//2. 
class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }
    
    keys(){
      const keysArray = [];
      console.log(this.data.length);
      for (let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  myHashTable.keys()

/********************* MAP *********************/

//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//HashMap is like a drawer that stores things on bins and labels them


let newMap = new Map();
//key: value
//set(key,value) and get(key)

newMap.set('oneKey',1)
newMap.set('twoKey',2)
newMap.set('threeKey',3)
newMap.set('fourkey',4)

console.log(newMap);
//Map { 'oneKey' => 1, 'twoKey' => 2, 'threeKey' => 3, 'fourkey' => 4 }

console.log(newMap.get('twoKey')) // 2

//PROPERTIES & METHODS

//has()
newMap.has('onekey')

//size
console.log(newMap.size) //4

//keys() and value()
const iterator1 = newMap.keys();
const iterator2 = newMap.values();
const iterator3 = newMap.entries();

console.log(iterator1.next().value);
console.log(iterator2.next().value);
console.log(iterator3.next().value);

// expected output: oneKey 1
//[ 'oneKey', 1 ]

console.log(iterator1.next().value);
console.log(iterator2.next().value);
console.log(iterator3.next().value);

// expected output: twoKey 2
//[ 'twoKey', 2 ]
