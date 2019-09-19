const LinkedList = require("./list.js")

class Graph{

	constructor(isDirected=false){
		 this.vertices = {};
		 this.edges = {}; 
	}

	addVertex(vertex){
		this.vertices[vertex.getValue()] = vertex;
	}

	getNeighbours(vertex){
		return vertex.getNeighbours();
	}
	getAllVertices(){
		return Object.values(this.vertices);
	}

	getAllEdges(){
		return Object.values(this.edges);
	}
	
	addEdge(edge){
		//First step to add an edge to a graph is finding the start and end
		//vertices.
		// And if they are not in the graph already ,add them.
		// Finally simply add the edge to the graph .

		let startVertex = this.getVertexByKey(edge.startVertex.getKey());
		let endVertex =  this.getVertexByKey(edge.endVertex.getKey());

		//Now check if the vertices are present.
		// First check startVertex
		if(!startVertex){
			this.addVertex(edge.startVertex);
			startVertex = this.getVertexByKey(edge.startVertex.getKey());
		}
		//Now check the endVertex
		if(!endVertex){
			this.addVertex(edge.endVertex);
			endVertex = this.getVertexByKey(edge.endVertex.getKey());
		}

		//Now add the edge itself
		this.edges[edge.getKey()] = edge;

		// Finalyy, add the edges to the vertices itself.
		if(this.isDirected){
			startVertex.addEdge(edge);
		}else{
			startVertex.addEdge(edge);
			endVertex.addEdge(edge);
		}
	}

	deleteEdge(edge){
		//Deleting an edge from a graph involves two steps
		//1.First, delete it from the edges object
		//2.Delete it from the vertices
		delete this.edges[edges.getKey()];

		// Delete it from start vertex and end vertex
		let startVertex = this.getVertexByKey(edge.startVertex.getKey());
		let endVertex = this.getVertexByKey(edge.endVertex.getKey());

		startVertex.deleteEdge(edge);
		endVertex.deleteEdge(edge);

	};


	findEdge(startVertex,endVertex){
		//First, see if the start vertex is in  graph
		// If it is not ,the edge wont be there too.
		// If it is there ,call the findEdge method of that graph
		
		let startVertex = this.getVertexByKey(edge.startVertex.getKey());
		let endVertex = this.getVertexByKey(edge.endVertex.getKey());
		let vertex = startVertex || endVertex;

		if(!vertex){
			return null;
		}
		vertex.findEdge(endVertex);

	}

	getWeight(){
		//Weight of a graph is simply the sum of all the weights of the edges
		let weight = 0;
		edges = this.getAllEdges();

		for(let i=0;edges.length;i++){
			weight += edges[i].weight;
		}

		return weight;
	}

	reverse(){
		// This function reverse all the edges in a directed graph.
		// To reverse an edge -
		// 		Delete the edge from the graph
		// 		Call the reverse method of the edge itself
		// 		Once it is reversed, add the edge back again.
		// 	And do the sam for all the edges.

		this.getAllEdges().forEach(edge =>{

			//First,delete the edge from the graph
			this.deleteEdge(edge);
			//Reverse the vertices
			edge.reverse();
			// Add the edge back again
			this.addEdge(edge);
		})

	};

	//Utility Functions
	getVertexByKey(key){
		return this.vertices[key];
	}

	getAdjacencyMatrix(){};
}

class GraphVertex{

	constructor(value){
		this.value = value;
		this.edges = new LinkedList();
	}

	addEdge(edge){
		this.edges.append(edge);
	}

	deleteEdge(edge){
		this.edges.delete(edge); 
	}

	deleteAllEdges(){
		//Get all the edges of the vertex
		let edges = this.getEdges();
		//And then for each edge,call the deleteEdge
		edges.forEach(e => this.deleteEdge(e));
	}
  
	getNeighbours(){ 
		//First get all edges of the vertex
		let edges = this.edges.toArray();
		return edges.map(e =>{
			// Now for each edge, check if the start vertex is the
			// current vertex where we are calling the getNeighbours(  )
			if(e.value.startVertex === this){
				return e.value.endVertex;
			}else{
				return e.value.startVertex;
			}
		})

	}
	//find the edge of the passed vertex
	findEdge(vertex){
		let edges = this.getEdges();
		let found = edges.map(e=>{
			return vertex === e.startVertex || vertex === e.endVertex;
		})
		return found ? found.value : null;
	}

	getEdges(){
		let edges = this.edges.toArray();
		// console.log(edges);
		return edges.map(e =>e.value);
	}

	getDegree(){
		//A degree of a vertex is simply the number of edges it has.
		return this.edges.toArray().length;
	}


 	//Check if a vertex has an edge.
 	// This function should either return true if the edge is found or 
 	// false if it is not found.
	hasEdges(edge){
		let found = this.edges.search(edge);
		return !! found;
	}

	//To see if a passed vertex is a neighbour of a vertex
	// First get all the edges of that vertex.
	//Then search through edges and see if the vertex to be found
	// is either startVertex or the endVertex of the edge.
	// If it is found as either of them ,return true. Otherwise 
	// return false.
	hasNeighbour(vertex){

		let edges = this.getEdges();
		let found = edges.find(e =>{
			return vertex === e.startVertex || vertex === e.endVertex;
		})
		return !! found;
	}
	
	getKey(){
		return this.value;
	}
	
	toString(){

		return this.getKey();
	}
}

class GraphEdge{

	constructor(startVertex,endVertex,weight = 0){
		 this.startVertex = startVertex;
		 this.endVertex = endVertex;
		 this.weight = weight;
	}

	reverseVertices(){
		let tmp = this.startVertex;
		this.startVertex = this.endVertex;
		this.endVertex = tmp;
	}

	getKey(){
		return `${this.startVertex.getKey()}_${this.endVertex.getKey()}`;
	}

	toString(){
		return this.getKey();
	}
}

let graph = new Graph(isDirected=false);

let a = new GraphVertex("A");
let b = new GraphVertex("B");
let c = new GraphVertex("C");

let a_b = new GraphEdge(a,b);
let a_c = new GraphEdge(a,c); 

a.addEdge(a_b);
a.addEdge(a_c);

console.log(a.getEdges().map(e => e.toString()));
console.log("Neighbours of A : ",a.getNeighbours().map( n => n.toString()))
console.log("Degree of A :",a.getDegree());
console.log(a.hasEdges(a_b));
console.log(a.hasEdges(a_c));