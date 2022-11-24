//
// desin node of a
// weighted graph incidence list
//
// object:(Node){valor: num} Basic node, can be connected with a conection
// conection: (Node){node1: object, node2: object, weight: number} represents a bridge between two nodes, and its weight
function conection(a, b, w){ // node a, node b, weight
    this.node1 = a;
    this.node2 = b;
    this.weight = w;
}

function node (n){
    this.value = n;

}

const w = new Node('w')
const x = new Node('x')
const y = new Node('y')
const z = new Node('z')

let m = {
    a: new conection(w,x,1),
    b: new conection(w,y,6),
    c: new conection(w,z,4),
    d: new conection(x,y,2),
    e: new conection(x,z,5),
    f: new conection(y,z,3),
}

console.log(m)