class Queue {
    constructor() {
        this.item = [];
        this.frontIndex = 0;
    }
    enqueue(val) {
        this.item.push(val);
    }
    dequeue() {
        if(this.frontIndex < this.item.length)
        return this.item[this.frontIndex++];
    }
    peek() {
        return this.item[this.frontIndex];
    }
    isEmpty() {
        return  this.frontIndex >= this.item.length;
    }
}

const createQueueOperation = () => {
    const queue = new Queue();
    const operations = [];

    queue.enqueue(10);
    operations.push({
        type:"enqueue",
        value:10
    });

    queue.enqueue(20);
    operations.push({
        type:"enqueue",
        value:20
    });

    queue.enqueue(30);
    operations.push({
        type:"enqueue",
        value:30
    });

    const removed = queue.dequeue();

    operations.push({
        type:"dequeue",
        value:removed
    });

    queue.enqueue(40);
    operations.push({
        type:"enqueue",
        value:40
    });

    return operations;
}
export default createQueueOperation;