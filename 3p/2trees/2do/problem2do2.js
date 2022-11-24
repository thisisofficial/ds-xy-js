// Tree search
//
// Damian Perez Erik Roberto
// Discua Amador Samuel
// Lopez Perez Heriberto
// Naranjo Guitierrez Luis Octavio

function Node(key){
    this.key = key
    this.left = null
    this.right = null
  } 
// --------------------------------------------------------------
class BinarySearchTree {
   constructor(){
    this.root = null
  }
  
  insertNode(node, newNode){
    if (newNode.key < node.key){ 
      if (node.left === null){ 
        node.left = newNode 
      } else {
        this.insertNode(node.left, newNode) 
      }
    } else {
        if (node.right === null){
        node.right = newNode 
      } else {
        this.insertNode(node.right, newNode) 
      }
    }
  }
  insert(key){
    var newNode = new Node(key) 
    if (this.root === null){ 
      this.root = newNode
    } else {
      this.insertNode(this.root,newNode) 
    }
  }
  
  // Busacar ---------------------------------------------------
  search(key){
    return this.searchNode(this.root, key) 
  }
  searchNode(node, key){
    if (node === null){ 
      return false
    }
    if (key < node.key){ 
      return this.searchNode(node.left, key) 
    } else if (key > node.key){ 
      return this.searchNode(node.right, key) 
    } else {
      return true 
    }
  }
  
  //Eliminar -----------------------------------------------------
  remove(key){ this.root = this.removeNode(this.root, key) } 
  findMinNode(node){ //AUX FINAL
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  removeNode(node, key){
    if (node === null){ 
      return null
    }
    if (key < node.key){  //ES MENOR
      node.left = this.removeNode(node.left, key) 
      return node 
    } else if (key > node.key){ //ES MAYOR
      node.right = this.removeNode(node.right, key) 
      return node 
    } else { // key is equal to node.key
    //case 1 - a leaf node
    if (node.left === null && node.right === null){ 
      node = null 
      return node 
    }
    //case 2 - a node with only 1 child
    if (node.left === null){ 
      node = node.right 
      return node 
    } else if (node.right === null){ 
      node = node.left 
      return node 
    }
    //case 3 - a node with 2 children
    var aux = this.findMinNode(node.right) 
    node.key = aux.key 
    node.right = this.removeNode(node.right, aux.key) 
    return node 
    }
  }

  // IN ORDER ----------------------------------------------------
  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root, callback) 
  }
  inOrderTraverseNode(node, callback) {
    if (node !== null) { 
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key) 
      this.inOrderTraverseNode(node.right, callback) 
    }
  }
  
}
// aux
function printNode(value){ //{6}
  console.log(value);
}

// crear arbol
var tree = new BinarySearchTree()
tree.insert(11) //key
// añadir elementos
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

// mostrar arbol
tree.inOrderTraverse(printNode)
// buscar
console.log(tree.search(1) ? '1 Encontrado' : '1 No encontrado')
console.log(tree.search(8) ? '8 Encontrado' : '8 No encontrado')
//Eliminar
tree.remove(8)
// comprobar si elimino
tree.inOrderTraverse(printNode)
console.log(tree.search(8) ? '8 Encontrado' : '8 No encontrado')