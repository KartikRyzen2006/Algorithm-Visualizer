const visualizationEngine = (visualArray, currentOperation, sortedIndexes,currentVisitIndex,foundIndex,stack,queue,linkedList) => {
    const newArray = [...visualArray];
    const newSortedIndexes = [...sortedIndexes];
    const newStack = [...stack];
    const newQueue = [...queue];
    const newLinkedList = [...linkedList];

    let newFoundIndex = foundIndex;
    let newCurrentVisitIndex = currentVisitIndex;

    if(currentOperation.type === "swap") {
        [newArray[currentOperation.index1],newArray[currentOperation.index2]] = [newArray[currentOperation.index2],newArray[currentOperation.index1]];
    } else if(currentOperation.type === "sorted") {
        newSortedIndexes.push(currentOperation.index)
    }else if(currentOperation.type === "visit") {
        newCurrentVisitIndex= currentOperation.index;
    }else if(currentOperation.type ==="found") {
        newFoundIndex = currentOperation.index;
    }else if(currentOperation.type === "push") {
        newStack.push(currentOperation.value);
    }else if(currentOperation.type === "pop"){
        newStack.pop();
    }else if(currentOperation.type === "enqueue"){
        newQueue.push(currentOperation.value);
    }else if(currentOperation.type === "dequeue"){
        newQueue.shift();
    }else if(currentOperation.type === "append") {
        newLinkedList.push(currentOperation.value);
    }else if(currentOperation.type === "prepend") {
        newLinkedList.unshift(currentOperation.value);
    }else if(currentOperation.type === "delete") {
        const index = newLinkedList.indexOf(currentOperation.value);

        if(index !== -1) {
            newLinkedList.splice(index,1);
        }
    }
    return {
        array: newArray,
        sortedIndexes: newSortedIndexes,
        currentVisitIndex: newCurrentVisitIndex,
        foundIndex: newFoundIndex,
        stack: newStack,
        queue: newQueue,
        linkedList: newLinkedList
    }
}

export default visualizationEngine;