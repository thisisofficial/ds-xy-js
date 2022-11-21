
export default function Linked(n) {//node
    this.head = n//node
    this.tail = n//node
    this.size = 1
  
    this.getHead = getHead
    this.getTail = getTail
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.contains = contains
  
    this.insertBefore = insertBefore
    this.insertAfter = insertAfter
  }
  
  function getHead() { return this.head }
  
  function prepend(n) {//new node
    n.next = this.head
    this.head = n
    this.size++
  }
  
  function append(n) {//new node
    n.next = null//
    this.tail.next = n
    this.tail = n
    this.size++
  }
  
  function traverse() {
    let c = this.head
    while (c) {//exists
      //console.log(c.key)
      console.log(c.data)
      c = c.next
    }
    console.log('\n')
  }
  
  //
  // exercises
  //
  
  function contains(k) {
    let c = this.head;
    while (c) {
      if (c.key === k) {
        return true
      }
      c = c.next
    }
    return false
  }
  
  function getTail() {
    if (this.size === 0) {
      return null;
    }
    return this.tail;
  }
  function insertAfter(newNode, k) {
    let c = this.head
    while (c) {
      if (c.key === k) {
        newNode.next = c.next;
        c.next = newNode
        this.size++
        return true
      }
      c = c.next
    }
    return false
  }
  
  
  function insertBefore(newNode, k) {  //Takes in a node and a key
    let c = this.head
    while (c) {// checks if c is defined
      if (c.next.key === k) { //If the next one to the current is the key
        newNode.next = c.next  //Then it places the new node before the next one
        c.next = newNode  //Then the current changes it next link to the new one
        this.size++
        return true   //Then returns true
      }
      c = c.next   //Cycles to the next node in line
    }
    return false    //Else it never adds the new node and returns false
  }
