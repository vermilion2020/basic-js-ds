

// const { Node } = require('../extensions/list-tree.js');
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
      this._root = null;
    }
  
    root() {
      return this._root;
    }
  
    add(data) {
      this._root = addNode(this.root(), data);
  
      function addNode(node, data) {
          if (!node) {
            return new Node(data);
          } 
          
          if(node.data === data) {
            return node;
          }
    
          if(data < node.data) {
            node.left = addNode(node.left, data);
          } else {
            node.right = addNode(node.right, data);
          } 
                          
          return node;
        }
    }
  
    has(data) {
      return searchNode(this.root(), data);
  
      function searchNode(node, data) {
        if(!node) {
          return false;
        }
  
        if(node.data === data)
        {
            return true;
        }
  
        return data < node.data ?
        searchNode(node.left, data) :
        searchNode(node.right, data)
      }
    }
  
    find(data) {
      return searchNode(this.root(), data);
  
      function searchNode(node, data) {
          if(!node) {
              return null;
          }
  
          if(node.data === data)
          {
              return node;
          }
  
        return data < node.data ?
        searchNode(node.left, data) :
        searchNode(node.right, data)
      }
    }
  
    remove(data) {
      const removeNode = (node, data) => {
        if(!node) {
          return null;
        }
  
        if(data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
  
          if(!node.left) {
            node = node.right;
            return node;
          }
  
          if(!node.right) {
            node = node.left;
            return node;
          }
  
          let minRight = this.min(node.right);
          node.data = minRight;
          node.right = removeNode(node.right, minRight.data);

          return node;
        }
      }

      this._root = removeNode(this.root(), data);
    }
  
    min(node) {
        !node ? node = this.root() : '';
        return minNode(node);
            function minNode(node) {
                if(!node.left) {
                    return node.data;
                }
                return minNode(node.left);
            }
    }
    
    max() {
        return maxNode(this.root());
            function maxNode(node) {
                if(!node.right) {
                    return node.data;
                }
                return maxNode(node.right);
            }
      }
  }
  
  const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.remove(8);
      tree.remove(9);
console.log(tree.has(2));