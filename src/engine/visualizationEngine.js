const visualizationEngine = (visualArray, currentOperation, sortedIndexes,currentVisitIndex,foundIndex) => {
    const newArray = [...visualArray];
    const newSortedIndexes = [...sortedIndexes];

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
    }
    return {
        array: newArray,
        sortedIndexes: newSortedIndexes,
        currentVisitIndex: newCurrentVisitIndex,
        foundIndex: newFoundIndex
    }
}

export default visualizationEngine;