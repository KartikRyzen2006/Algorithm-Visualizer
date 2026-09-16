const visualizationEngine = (
    visualArray,
    currentOperation,
    sortedIndexes,
    currentVisitIndex,
    foundIndex,
    stack,
    queue,
    linkedList,
    treeRoot,
    heap = [],
    graphVisited = [],
    graphActiveVertex = null
) => {
    const newArray = [...visualArray];
    const newSortedIndexes = [...sortedIndexes];
    const newStack = [...stack];
    const newQueue = [...queue];
    const newLinkedList = [...linkedList];
    const newHeap = [...heap];
    const newGraphVisited = [...graphVisited];

    const newTreeRoot = treeRoot;

    let newFoundIndex = foundIndex;
    let newCurrentVisitIndex = currentVisitIndex;
    let newGraphActiveVertex = graphActiveVertex;
    let newHeapHighlighted = [];

    if (!currentOperation) {
        return {
            array: newArray,
            sortedIndexes: newSortedIndexes,
            currentVisitIndex: newCurrentVisitIndex,
            foundIndex: newFoundIndex,
            stack: newStack,
            queue: newQueue,
            linkedList: newLinkedList,
            treeRoot: newTreeRoot,
            heap: newHeap,
            heapHighlighted: newHeapHighlighted,
            graphVisited: newGraphVisited,
            graphActiveVertex: newGraphActiveVertex
        };
    }

    // =========================
    // ARRAY / SORTING
    // =========================

    if (
        currentOperation.type === "swap" &&
        !currentOperation.array
    ) {
        [
            newArray[currentOperation.index1],
            newArray[currentOperation.index2]
        ] = [
            newArray[currentOperation.index2],
            newArray[currentOperation.index1]
        ];
    }

    else if (currentOperation.type === "sorted") {
        newSortedIndexes.push(currentOperation.index);
    }

    // =========================
    // SEARCHING / TREE
    // =========================

    else if (currentOperation.type === "visit") {
        newCurrentVisitIndex = currentOperation.node;
    }

    else if (currentOperation.type === "found") {
        newFoundIndex = currentOperation.node;
    }

    // =========================
    // STACK
    // =========================

    else if (currentOperation.type === "push") {
        newStack.push(currentOperation.value);
    }

    else if (currentOperation.type === "pop") {
        newStack.pop();
    }

    // =========================
    // QUEUE
    // =========================

    else if (currentOperation.type === "enqueue") {
        newQueue.push(currentOperation.value);
    }

    else if (currentOperation.type === "dequeue") {
        newQueue.shift();
    }

    // =========================
    // LINKED LIST
    // =========================

    else if (currentOperation.type === "append") {
        newLinkedList.push(currentOperation.value);
    }

    else if (currentOperation.type === "prepend") {
        newLinkedList.unshift(currentOperation.value);
    }

    else if (currentOperation.type === "delete") {
        const index = newLinkedList.indexOf(
            currentOperation.value
        );

        if (index !== -1) {
            newLinkedList.splice(index, 1);
        }
    }

    // =========================
    // HEAP
    // =========================

    else if (currentOperation.type === "insert") {

        if (currentOperation.array) {
            newHeap.length = 0;
            newHeap.push(...currentOperation.array);
        }

        if (currentOperation.index !== undefined) {
            newHeapHighlighted = [
                currentOperation.index
            ];
        }
    }

    else if (currentOperation.type === "compare") {

        if (currentOperation.array) {
            newHeap.length = 0;
            newHeap.push(...currentOperation.array);
        }

        if (currentOperation.indices) {
            newHeapHighlighted = [
                ...currentOperation.indices
            ];
        }
    }

    else if (
        currentOperation.type === "swap" &&
        currentOperation.array
    ) {

        newHeap.length = 0;
        newHeap.push(...currentOperation.array);

        if (currentOperation.indices) {
            newHeapHighlighted = [
                ...currentOperation.indices
            ];
        }
    }

    else if (currentOperation.type === "extract") {

        if (currentOperation.array) {
            newHeap.length = 0;
            newHeap.push(...currentOperation.array);
        }

        newHeapHighlighted = [];
    }

    // =========================
    // GRAPH
    // =========================

    else if (currentOperation.type === "graphStart") {

        newGraphVisited.length = 0;

        if (currentOperation.visited) {
            newGraphVisited.push(
                ...currentOperation.visited
            );
        }

        newGraphActiveVertex =
            currentOperation.vertex;
    }

    else if (currentOperation.type === "graphVisit") {

        newGraphVisited.length = 0;

        if (currentOperation.visited) {
            newGraphVisited.push(
                ...currentOperation.visited
            );
        }

        newGraphActiveVertex =
            currentOperation.vertex;
    }

    else if (currentOperation.type === "graphDequeue") {

        newGraphActiveVertex =
            currentOperation.vertex;
    }

    else if (currentOperation.type === "graphCompare") {

        newGraphActiveVertex =
            currentOperation.edge
                ? currentOperation.edge[1]
                : null;
    }

    else if (currentOperation.type === "graphBacktrack") {

        newGraphActiveVertex =
            currentOperation.vertex;
    }

    else if (currentOperation.type === "graphComplete") {

        newGraphVisited.length = 0;

        if (currentOperation.visited) {
            newGraphVisited.push(
                ...currentOperation.visited
            );
        }

        newGraphActiveVertex = null;
    }

    return {
        array: newArray,
        sortedIndexes: newSortedIndexes,
        currentVisitIndex: newCurrentVisitIndex,
        foundIndex: newFoundIndex,
        stack: newStack,
        queue: newQueue,
        linkedList: newLinkedList,
        treeRoot: newTreeRoot,
        heap: newHeap,
        heapHighlighted: newHeapHighlighted,
        graphVisited: newGraphVisited,
        graphActiveVertex: newGraphActiveVertex
    };
};

export default visualizationEngine;