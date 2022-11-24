//
// add two nodes
// zee your notes
//
// then
// call preorder
// 
import {preorder} from '../preorder.js'
import {Node} from '../1tree.js'



let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)
let q1 = new Node(5)
let q2 =new Node(-2)

p.l = o1
p.r = o2
o2.l = q1
o2.r = q2

preorder(p)
