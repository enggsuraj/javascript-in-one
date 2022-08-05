class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.current = -1;
  }

  // BUILD TREE
  buildTree(nodes) {
    this.current++;
    if (nodes[this.current] === -1) {
      return null;
    }

    const n = new Node(nodes[this.current]);
    n.left = this.buildTree(nodes);
    n.right = this.buildTree(nodes);
    return n;
  }

  // PREORDER
  preorder(root) {
    if (root == null) {
      return;
    }
    console.log(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }

  // INORDER
  inorder(root) {
    if (root == null) {
      return;
    }
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
  }

  // POSTORDER
  postorder(root) {
    if (root == null) {
      return;
    }
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.data);
  }
}

let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
const bt = new BinaryTree();
const root = bt.buildTree(nodes);
console.log("------------");
// 124536

bt.preorder(root);
console.log("------------");
// 124536

bt.inorder(root);
// 425136
console.log("------------");

bt.postorder(root);
// 452631
