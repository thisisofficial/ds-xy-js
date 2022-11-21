class Queue {
    elementos = [];
    top = 5;
    
    add = (elemento) => {
      return this.isfull()? false: this.elementos.splice(0, 0, elemento);
    }
    remove = () => {
      return this.isempty()?false:this.elementos.pop();
    }
    isempty = () => {
      return this.elementos.length === 0;
    }
    isfull = () => {
      return this.elementos.length === this.top;
    }
    empty = () => {
      return this.elementos.length === 0;
    }
    size = () => {
      return this.elementos.length;
    }
  }
  
  const q = new Queue;
  
  q.add(1);
  q.add(2);
  q.add(3);
  q.add(4);
  q.add(5);
  console.log(q.add(6)?"Added correctly" : "Error")
  
  console.log(printFullness(q));
  console.log(printEmptyness(q));
  console.log(q.size());
  
  console.log("Removed: " + q.remove());
  console.log("Removed: " + q.remove());
  console.log("Removed: " + q.remove());
  console.log("Removed: " + q.remove());
  console.log("Removed: " + q.remove());
  console.log(q.remove()? "Removed" : "Not removable");
  
  console.log(printFullness(q));
  console.log(printEmptyness(q));
  console.log(q.size());
  
  function printFullness(queue){
    if(queue.isfull()){
      return "It is indeed full"
    }
    return "It isnt full"
  }
  
  function printEmptyness(queue){
    if(queue.isempty()){
      return "It is indeed empty"
    }
    return "It isnt empty"
  }
  
