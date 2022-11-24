// Damian Perez Erik Roberto
// Discua Amador Samuel
// Lopez Perez Heriberto
// Naranjo Guitierrez Luis Octavio
// Grafo no dirigido

function Dictionary(){
    var items = {}
    
    this.has = function(key){
      return key in items
    }
    this.set = function(key,value){
      items[key] = value 
    }
    this.get = function(key) {
      return this.has(key) ? items[key] : undefined
    }
    this.delete = function(key){
      if (this.has(key)){
        delete items[key]
        return true
      }
      return false
    }
  }
  
  
  function Graph() {
    var vertices = [] 
    var adjList = new Dictionary() 
    
    this.addVertex = function(v){
      vertices.push(v) 
      adjList.set(v, []) 
    }
    this.addEdge = function(v, w){
      adjList.get(v).push(w) 
    }
    this.toString = function(){
      var s = ''
      for (var i=0; i<vertices.length; i++){
        s += vertices[i] + ' -> '
        var neighbors = adjList.get(vertices[i]) 
        for (var j=0; j<neighbors.length; j++){ 
          s += neighbors[j] + ' '
        }
        s += '\n'
      }
      return s
    }
      this.search = function(n){
        let k = 0
        for (var i=0; i<vertices.length; i++){
          if(vertices[i] == n){ console.log('Encontrado'); k++}
        }
        if(k == 0){console.log('No encontrado')}
    }
    this.delete = function(n){
        for (var i=0; i<vertices.length; i++){
          if(vertices[i] == n){
            for(let j=0; j<(vertices.length - (i+1)); j++){
              vertices[i+j] = vertices[i+j+1]
            }
            vertices.pop()
            for(let p = 0; p<vertices.length; p++){
              let aux = adjList.get(vertices[p])
              for(let y = 0; y < aux.length; y++){
                if(aux[y]==n){
                  while(y<aux.length){
                    aux[y] = aux[y+1]
                    y++
                  }
                  aux.pop()
                }
              }
            }
          }
        }
      }
  }
  
  var graph = new Graph()
  var myVertices = ['A','B','C','D','E','F','G','H','I']
  for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i])
  }
  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('C', 'D')
  graph.addEdge('C', 'G')
  graph.addEdge('D', 'G')
  graph.addEdge('D', 'H')
  graph.addEdge('B', 'E')
  graph.addEdge('B', 'F')
  graph.addEdge('E', 'I')
  console.log(graph.toString())
  graph.search('J')