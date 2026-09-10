const bubbleSort = (arr) => {
    const operations = [];
    const array = [...arr]
    for(let i = 0; i< array.length-1;i++) {
        let swapped = false;
        for(let j = 0; j < array.length-i-1;j++) {
            operations.push({
                type: "compare",
                index1: j,
                index2:j+1
            })
            if(array[j] > array[j+1]) {
                [array[j],array[j+1]] = [array[j+1],array[j]];
                swapped = true;
                operations.push({
                    type: "swap",
                    index1: j,
                    index2: j+1
                });
            }

        }
        operations.push({
            type:"sorted",
            index: array.length - i - 1
        })

        if(!swapped) {
            for(let k = 0; k < array.length-i-1;k++) {
                operations.push({
                    type:"sorted",
                    index: k
                })
            }
            break;
        }
    }
    return operations;
}

export default bubbleSort;