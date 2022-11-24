//
// SERIES
// recursively
//

// 1. fibonacci

const aux = (n) => n<2? n : aux(n-2) + aux(n-1);
  
function fib (a, arr = []){
    if(a <= 0){
        console.log(arr)
        return
    } 

    else {
        arr.unshift(aux(a))
        fib(a-1, arr)
    }
}
fib(5)

// 2. power

function pow(b, p){
    if(p == 0)
        return 1
    else if(p < 0)
        return -1

    if(p>=1)
        return b* pow(b,(p-1));
    else
        return b
}

console.log(pow(2,3))

// 3. factorial

function fact(n){
    if(n <= 0) 
        return -1
    
    if(n>1)
        return n* fact(n-1);
    else
        return n  
}

console.log(fact(3))