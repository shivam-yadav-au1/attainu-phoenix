class Heap {

    constructor(compareFunction){
        this.array = [];
        this.compare = compareFunction;
    }

    add(item){
        this.array.push(item);
        this.heapifyUp();
    }

    find(item){
        for(var i = 0;i<this.array.length;i++){
            if(item === this.array[i]){
                return i;
            }
        }
        return -1;
    }

    remove(item){
        let indexToRemove  = this.find(item);
        // if item to remove is not there just return null
        if(indexToRemove === -1 ){return null;}
        // if item to remove is last just pop it from array 
        if(indexToRemove === this.array.length -1){
            return this.array.pop();
        }
        // First move last element to index to be removed 
        this.array[indexToRemove] = this.array.pop();
        // Decide between heapifyUp and heapifyDown
        let parent = this.getParent(indexToRemove);

        if(this.hasLeftChild(indexToRemove) && (this.compare(parent,this.array[indexToRemove]))){
            this.heapifyDown(indexToRemove);
        }else{
            this.heapifyUp(indexToRemove);
        }

    }

    heapifyUp(index){
        let currentIndex = index || this.array.length -1;
         while(this.hasParent(currentIndex)){
             if(!this.compare(this.getParent(currentIndex) , this.array[currentIndex])){
                 this.swap(this.getParentIndex(currentIndex),currentIndex);
             }
             currentIndex = this.getParentIndex(currentIndex);
         }
    }

    heapifyDown(index=0){
        /*
            Compare the parent element to its children.
            and then swap the parent with the appropriate child.
            That will be the smallest for a min heap or the largest for a max
            heap.
            Repeat the same process for the next child.

        */
        let currentIndex = index;
        // Run the loop till we have a left child to check
        while(this.hasLeftChild(currentIndex)){
            //First assume that the left child is smallest child
            let smallestChildIndex = this.getLeftChildIndex(currentIndex);
            // Check if right child is there
            // If the right child is there,compare the right child  with the 
            //left one and see if the right child is the smallest one.
            if(this.hasRightChild(currentIndex) && this.compare(this.getRightChild(currentIndex) 
                , this.getLeftChild(currentIndex))){
                smallestChildIndex = this.getRightChildIndex(currentIndex); 
            }

            //Now check the currentIndex with smallestIndex 
            //If currentIndex is smaller,just break the loop 
            //no need to check further .
            if(this.compare(this.array[currentIndex] ,this.array[smallestChildIndex])){
                break;
            }else{
                this.swap(currentIndex,smallestChildIndex);
            }
            currentIndex = smallestChildIndex;

        } 
    };

    getLeftChildIndex(parentIndex){
        return (2 * parentIndex)+1;
    };

    getRightChildIndex(parentIndex){
        return (2 * parentIndex) + 2;
    };

    getParentIndex(childIndex){
        return Math.floor((childIndex -1)/2);
    };

    getLeftChild(parentIndex){
        return this.array[this.getLeftChildIndex(parentIndex)];
    };

    getRightChild(parentIndex){
        return this.array[this.getRightChildIndex(parentIndex)];
    };

    getParent(childIndex){
        return this.array[this.getParentIndex(childIndex)];
    };

    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0;
    }
    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.array.length;
    }

    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.array.length;
    }

    swap(indexOne,indexTwo){
        let temp = this.array[indexOne];
        this.array[indexOne] = this.array[indexTwo];
        this.array[indexTwo] = temp;
    }

    print(){
        console.log(this.array);
    }
}

// class MinHeap extends Heap{
//     constructor(){
//         let compare = function(a,b){
//             return a<b;
//         }
//         super(compare);
//     }
// }

// let minHeap = new MinHeap();

// minHeap.add(9);
// minHeap.add(2);
// minHeap.add(0);
// minHeap.add(1);
// minHeap.add(2);
// minHeap.add(4);
// minHeap.add(8);

// minHeap.print();

// minHeap.remove(2);

// minHeap.print();

// class MaxHeap extends Heap{
//     constructor(){

//         let compare = function(a,b){
//             return a > b;
//         }
//         super(compare)
//     }
// }



// let maxHeap = new MaxHeap();

// maxHeap.add(9);
// maxHeap.add(2);
// maxHeap.add(0);
// maxHeap.add(1);
// maxHeap.add(2);
// maxHeap.add(4);
// maxHeap.add(8);

// maxHeap.print();

// maxHeap.remove(2);

// maxHeap.print();

class PriorityQueue extends Heap{
    constructor(){

        let compare = function(a,b){
            
            return this.priorities[a] < this.priorities[b];
        }
        super(compare)
        this.priorities = {};

    }

    add(item,priority=100){
        this.priorities[item] = priority;
        // console.log(this.priorities)
        super.add(item);
    }

    remove(item){
        super.remove(item);
        delete this.priorities[item];
    }

    changePriority(item,priority){
        this.remove(item);
        this.add(item,priority);
    }
}



// let pq = new PriorityQueue();

// pq.add("Nadal",4);
// pq.add("Djokovic",3);
// pq.add("Federer",1);
// pq.add("Agassi",7);
// pq.add("Murray",5);
// pq.add("Sampras",9);
// pq.add("Williams",8);

// pq.print();

// pq.remove("Agassi");

// pq.changePriority("Federer",2);
// pq.changePriority("Djokovic",1);

// pq.print();

module.exports = PriorityQueue;