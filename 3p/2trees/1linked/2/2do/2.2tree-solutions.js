import {Node} from '../../1/1tree.js'

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)
let q1 = new Node(5)
let q2 =new Node(-2)

p.l = o1
p.r = o2
o2.l = q1
o2.r = q2

function inorder(n){
    if (n!==null){
      inorder(n.l)
      console.log(n.d)
      inorder(n.r)
    }
}

function posorder(n){
    if (n!==null){
      posorder(n.l)
      posorder(n.r)
      console.log(n.d)
    }
}

console.log('InOrder')
inorder(p)
console.log('PosOrder')
posorder(p)