class MaxHeap {
    constructor() {
        this.heap = [];
        this.steps = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] =
            [this.heap[index2], this.heap[index1]];

        this.steps.push({
            type: "swap",
            indices: [index1, index2],
            array: [...this.heap]
        });
    }

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

    heapifyUp() {
        let index = this.heap.length - 1;

        while (
            this.hasParent(index) &&
            this.parent(index) < this.heap[index]
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

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            const max = this.heap.pop();

            this.steps.push({
                type: "extract",
                value: max,
                array: [...this.heap]
            });

            return max;
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.steps.push({
            type: "extract",
            value: max,
            array: [...this.heap]
        });

        this.heapifyDown();

        return max;
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let largerChildIndex =
                this.getLeftChildIndex(index);

            if (
                this.hasRightChild(index) &&
                this.rightChild(index) > this.leftChild(index)
            ) {
                largerChildIndex =
                    this.getRightChildIndex(index);
            }

            this.steps.push({
                type: "compare",
                indices: [index, largerChildIndex],
                array: [...this.heap]
            });

            if (
                this.heap[index] >=
                this.heap[largerChildIndex]
            ) {
                break;
            }

            this.swap(index, largerChildIndex);

            index = largerChildIndex;
        }
    }

    peek() {
        return this.heap.length > 0
            ? this.heap[0]
            : null;
    }

    getHeap() {
        return [...this.heap];
    }

    getSteps() {
        return [...this.steps];
    }

    clearSteps() {
        this.steps = [];
    }

    clear() {
        this.heap = [];
        this.steps = [];
    }
}

export default MaxHeap;