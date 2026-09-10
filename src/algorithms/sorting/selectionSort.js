const selectionSort = (arr) => {
    const operations = [];
    const array = [...arr];

    for (let i = 0; i < array.length - 1; i++) {
        let smallestIndex = i;

        for (let j = i + 1; j < array.length; j++) {

            operations.push({
                type: "compare",
                index1: smallestIndex,
                index2: j
            });

            if (array[smallestIndex] > array[j]) {
                smallestIndex = j;
            }
        }

        if (smallestIndex !== i) {
            [array[smallestIndex], array[i]] =
            [array[i], array[smallestIndex]];

            operations.push({
                type: "swap",
                index1: smallestIndex,
                index2: i
            });
        }

        operations.push({
            type: "sorted",
            index: i
        });
    }

    // Last remaining element is automatically sorted
    operations.push({
        type: "sorted",
        index: array.length - 1
    });

    return operations;
};

export default selectionSort;