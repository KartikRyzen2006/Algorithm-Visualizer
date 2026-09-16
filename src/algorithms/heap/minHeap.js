class MinHeap {
    constructor() {
        this.heap = [];
        this.steps = [];
    }

    // Get parent index
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get left child index
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get right child index
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Check if parent exists
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    // Check if left child exists
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    // Check if right child exists
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    // Get parent value
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    // Get left child value
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    // Get right child value
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    // Swap two elements
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] =
            [this.heap[index2], this.heap[index1]];

        this.steps.push({
            type: "swap",
            indices: [index1, index2],
            array: [...this.heap]
        });
    }

    // INSERT
    insert(value) {
        this.heap.push(value);

        this.steps.push({
            type: "insert",
            index: this.heap.length - 1,
            value,
            array: [...this.heap]
        });

        this.heapifyUp();

        return this.heap;
    }

    // HEAPIFY UP
    heapifyUp() {
        let index = this.heap.length - 1;

        while (
            this.hasParent(index) &&
            this.parent(index) > this.heap[index]
        ) {
            const parentIndex = this.getParentIndex(index);

            this.steps.push({
                type: "compare",
                indices: [index, parentIndex],
                array: [...this.heap]
            });

            this.swap(index, parentIndex);

            index = parentIndex;
        }
    }

    // EXTRACT MIN
    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            const min = this.heap.pop();

            this.steps.push({
                type: "extract",
                value: min,
                array: [...this.heap]
            });

            return min;
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.steps.push({
            type: "extract",
            value: min,
            array: [...this.heap]
        });

        this.heapifyDown();

        return min;
    }

    // HEAPIFY DOWN
    heapifyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex =
                this.getLeftChildIndex(index);

            if (
                this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)
            ) {
                smallerChildIndex =
                    this.getRightChildIndex(index);
            }

            this.steps.push({
                type: "compare",
                indices: [index, smallerChildIndex],
                array: [...this.heap]
            });

            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);

            index = smallerChildIndex;
        }
    }

    // PEEK
    peek() {
        return this.heap.length > 0
            ? this.heap[0]
            : null;
    }

    // Get current heap
    getHeap() {
        return [...this.heap];
    }

    // Get visualization steps
    getSteps() {
        return [...this.steps];
    }

    // Clear steps
    clearSteps() {
        this.steps = [];
    }

    // Clear heap
    clear() {
        this.heap = [];
        this.steps = [];
    }
}

const heap = new MinHeap();

heap.insert(20);
heap.insert(10);
heap.insert(30);
heap.insert(5);

export default MinHeap;