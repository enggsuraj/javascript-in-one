// KEY VALUE PAIR
// SEARCHING - O(1)
const map = new Map();
map.set(1, "a");
map.set(2, "b");
map.set(3, "c");

console.log(map.keys());
console.log(map.get(3));

for (let [k, v] of map) {
  console.log(k, ":", v);
}

// INSERTION
// DELETION
// SEARCHING
