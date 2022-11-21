/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, or object
 * @returns {bool} - true or false, if value v exists or not,
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * PROBLEM 2
 * getTail()
 *
 * retrieve the node at the tail
 * @returns {Node} - Node at the tail or null if the list is empty
 *
 * @example
 * getTail()
 *
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
 function Linked(n) {//node
    this.head = n//node
    this.tail = n//node
    this.size = 1

    this.getHead = getHead
    this.getTail = getTail
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.contains = contains
}

function getHead(){return this.head}

function prepend(n){//new node
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){//new node
    n.next = null//
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){//exists
	//console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

//
// exercises
//

function contains(k){
  let c = this.head;
  while(c){
    if(c.key === k){
      return true
    }
    c = c.next
  }
  return false
}

function getTail(){
  if(this.size === 0){
    return null;
  }
  return this.tail;
}
