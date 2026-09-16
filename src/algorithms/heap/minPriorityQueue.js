import MinHeap from "./minHeap";

class MinPriorityQueue {
    constructor() {
        this.heap = new MinHeap();
    }

    enqueue(value) {
        this.heap.insert(value);
    }

    dequeue() {
        return this.heap.extractMin();
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

const queue = new MinPriorityQueue();

queue.enqueue(30);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(5);

console.log(queue.peek());   // 5
console.log(queue.dequeue()); // 5
console.log(queue.dequeue()); // 10

export default MinPriorityQueue;