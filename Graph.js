class Graph {

    constructor(n){
        this.n = n;
        this.adjList = new Map();

    }

    addVertex(v){
        this.adjList.set(v, [])
    }

    addEdge(v,w){
        this.AdjList.get(v).push(w);

        // if undirected

        this.AdjList.get(w).push(v);
    }

    printGraph(){
    // get all the vertices
    var get_keys = this.AdjList.keys();
 
    // iterate over the vertices
    for (const i of get_keys){

        var get_values = this.AdjList.get(i);
        var conc = "";
 
        for (var j of get_values)
            conc += j + " ";
 
            console.log(i + " -> " + conc);
        }
    }
}