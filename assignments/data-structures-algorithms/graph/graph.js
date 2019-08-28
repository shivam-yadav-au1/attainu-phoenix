const LinkedList = require("./list.js")

class Graph{}

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

	getNeighbours(){
	}

	getEdges(){}
}

class GraphEdge{}