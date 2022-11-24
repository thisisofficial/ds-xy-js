//
// your binary tree solution here
//
// Damian Perez Erik Roberto
// Discua Amador Samuel
// Lopez Perez Heriberto
// Naranjo Guitierrez Luis Octavio

function treeNode(n){
    this.data = n;
    this.parent = null;
    this.left = null;
    this.rigth = null;

    this.appendLeft = appendLeft;
    this.appendRigth = appendRigth;
    this.prependLeft = prependLeft;
    this.prependRigth = prependRigth;
    this.linkLeft = linkLeft;
    this.linkRigth = linkRigth;

    this.isLeaf = isLeaf;
    this.isRoot = isLeaf;
    this.hasChildren = hasChildren;
    this.deleteConnection = deleteConnection;
    this.deleteLeft = deleteLeft;
    this.deleteRigth = deleteRigth;
    this.deleteParent = deleteParent;
    this.export = exportTree;
}

//Dunno is all of t his is totally nessesary, but I like redundancy.

function exportTree(){
    let root;
    let cur = this;
    do{
        if(cur.isRoot){
            root = cur;
        }
        else{
            cur=cur.parent;
        }   
    }while(root === null)

    let need = [root.left , root.rigth];
    console.log(need);
    console.log('['+root.data+']');
    console.log('[{'+need[0].data+'}{'+need[1].data+'}]')
    let foo = true;
    while(foo){
        let newNeed = [];
        foo = false;
        let string = '';
        need.forEach(element => {
            if(!element.isLeaf()){
            string += ('[{'+element.left.data+'}{'+element.rigth.data+'}]')
            newNeed.push(element.left)
            newNeed.push(element.rigth)
            foo = true}
            else{
                string +=('--------')
                newNeed.push(element)
                newNeed.push(element)
            }
        });
        need = newNeed;
        console.log(string)
    }
}

function appendLeft(l){
    this.left? this.left.parent = null: '';
    this.left = l;
    l.parent = this;
}

function appendRigth(r){
    this.rigth? this.rigth.parent = null: '';
    this.rigth = r;
    r.parent = this;
}

function prependLeft(n){
    n.left? n.left.parent = null:'';
    n.left = this;
    this.parent = n;
}

function prependRigth(n){
    n.rigth? n.rigth.parent = null: '';
    n.rigth = this;
    this.parent = n;
}

function linkLeft(n , l){
    n.left? n.left.parent = null:'';
    n.left = l;
    l.parent = n;
}

function linkRigth(n , r){
    n.rigth? n.rigth.parent = null: '';
    n.rigth = r;
    r.parent = n;
}

function isLeaf (){
    return this.rigth === null && this.left === null;
}

function isRoot (){
    return this.parent === null;
}

function hasChildren(){
    return !this.isLeaf;
}

function deleteConnection(x,y){
    if(x.parent == y){
        x.parent = null;
        if(y.left == x){
            y.left = null;
        }
        else{
            y.rigth = null;
        }
    }
    else if(y.parent == x){
        y.parent = null;
        if(x.left == y){
            x.left = null;
        }
        else{
            x.rigth = null;
        }
    }
}

function deleteParent(){
        if(this.parent.left == this){
            this.parent.left = null;
        }
        else{
            this.parent.rigth = null;
        }
        this.parent = null;
}

function deleteLeft(x){
    this.left.parent = null
    this.left = null;
}

function deleteRigth(x){
    this.rigth.parent = null
    this.rigth = null
}

/* =============|Demo example|=============
                    [root]
                    /     \
                  [a]    [b] 
                  / \     / \
               [c]  [d] [e] [f]
                /\   /\     /\  
             [g][h][i][j] [k][l]
            Visual representation
*/

const root = new treeNode('root');
const a = new treeNode('a');
const b = new treeNode('b');
const c = new treeNode('c');
const d = new treeNode('d');
const e = new treeNode('e');
const f = new treeNode('f');
const g = new treeNode('g');
const h = new treeNode('h');
const i = new treeNode('i');
const j = new treeNode('j');
const k = new treeNode('k');
const l = new treeNode('l');

root.appendLeft(a);
b.prependRigth(root);
c.linkLeft(a,c);
a.linkRigth(a,d);
b.appendLeft(e);
b.appendRigth(f);
g.prependLeft(c);
h.prependRigth(c);
d.appendLeft(i);
d.appendRigth(j);
console.log (e.isLeaf()); //true
f.linkLeft(f,k);
f.linkRigth(f,l);

root.export();