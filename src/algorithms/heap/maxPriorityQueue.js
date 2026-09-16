import MaxHeap from "./maxHeap";

class MaxPriorityQueue {
    constructor() {
        this.heap = new MaxHeap();
    }

    enqueue(value) {
        this.heap.insert(value);
    }

    dequeue() {
        return this.heap.extractMax();
    }

    peek() {
        return this.heap.peek();
    }

    isEmpty() {
        return this.heap.getHeap().length === 0;
    }

    size() {
        return this.heap.getHeap().length;
    }

    getHeap() {
        return this.heap.getHeap();
    }

    getSteps() {
        return this.heap.getSteps();
    }

    clearSteps() {
        this.heap.clearSteps();
    }

    clear() {
        this.heap.clear();
    }
}

export default MaxPriorityQueue;