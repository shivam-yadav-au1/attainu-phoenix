class Node {

    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class Bst {

    constructor() {
    	this.root = null;
    }

    inOrder(node){
    	if(node != null){
    		this.inOrder(node.left);
    		console.log(node.data);
    		this.inOrder(node.right);
    	}
    }

   	insert(data){
   		let newNode = new Node(data);

   		if(this.root === null){
   			this.root = newNode;
   		}
   		else{
   			this.insertNode(this.root,newNode);
   		}
   	}
   	insertNode(node,newNode){
   		// if the data is less then newNode
   		//data move left of the tree
   		if(newNode.data < node.data){

   			// if left is null insert node here
   			if(node.left === null){
   				node.left = newNode;
   			}else{
   				// if left is not null recurr untill 
   				// null is found
   				this.insertNode(node.left,newNode);
   			}
   		}
   		// IF the data is more than the node
   		// data move right of the tree
   		else{
   			// if right is null insert node here 
   			if(node.right === null){
   				node.right = newNode;
   			}else{
   				// if right is not null recurr untill
   				// null is found
   				this.insertNode(node.right,newNode);
   			}
   		}
   	}

   	getRootNode(){
   		return this.root;
   	}

   	remove(data){
   		// root is re-initialized with
   		// root of a modified tree.
   		this.root = this.removeNode(this.root,data);
   	}

   	findMinimum(curr){
   		while(curr.left != null){
   			curr = curr.left;
   		}
   		return curr;
   	}

   	// Method to remove node with a given data it recurrs 
   	//over the tree to find the data and removes it

   	removeNode(root,data){
   		
   		// pointer to store parent node of current node;
   		let parent = null;

   		// start with root node;
   		let curr = root;
   		//search data in BST and set its parent pointer
   		while(curr != null && curr.data != data){
   			// update parent node as current node
   			parent = curr;

   			// if give data is less than the current node,go to
   			//left subtree else go to right subtree

   			if(data < curr.data){
   				curr = curr.left;
   			}else{
   				curr = curr.right;
   			}
   		}
   		// return if data is not found in the tree
   		if(curr == null){
   			return root;
   		}
   		// Case 1 : node to be deleted has no children i.e it is 
   		// a leaf node

   		if(curr.left === null && curr.right === null){
   			// if node to be deleted is not a root node,then set its
   			//parent left /right child to null
   			if(curr != root){
   				if(parent.left == curr){
   					parent.left = null;
   				}else{
   					parent.right = null;
   				}
   			}
   			// if tree has only root node, delete it and set root to null
   			else {
   				root = null;
   			}
   		}
   		//Case 2 :node to be deleted has two children
   		else if(curr.left != null && curr.right != null){

   			// find its in-order successor node

   			let successorNode = this.findMinimum(curr.right);

   			//store successor data
   			let data = successorNode.data;
   			//recursively delete the successor .Note that the successor
   			// will have at-most one chil (right child)

   			this.removeNode(root,successorNode.data);

   			// Copy the data of successor to current node
   			curr.data = data;

   		}
   		// Case 3: node to be deleted has only one child
   		else{
   			//find child node

   			let child = (curr.left != null)? curr.left : curr.right;
   			// if node to be deleted is not a root node, then set its parent
   			// to its child
   			if(curr != root){
   				if(curr == parent.left){
   					parent.left = child;
   				}else{
   					parent.right = child;
   				}
   			}
   			// if node to be deleted is root node,then set the root to child

   			else{
   				root = child;
   			}
   		}
   		return root;
   	}
}

function main() {


    let bst = new Bst();
    let root = new Node();

    let values = [15, 10, 20, 8, 12, 18,25,16,19,30,29,32];
    	bst.insert(15);
    	bst.insert(10);
    	bst.insert(20);
    	bst.insert(8);
    	bst.insert(12);
    	bst.insert(18);
    	bst.insert(25);
    	bst.insert(16);
    	bst.insert(19);
    	bst.insert(30);
    	bst.insert(29);
    	bst.insert(32);

    	bst.inOrder(bst.getRootNode());

    	bst.removeNode(bst.getRootNode(),20)

    	console.log("\n")

    	bst.inOrder(bst.getRootNode());


}

main();