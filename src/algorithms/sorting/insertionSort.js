function insertionSort(input) {
    const array = [...input];
    const steps = [];

    for (let i = 1; i < array.length; i++) {

        let j = i;

        while (j > 0) {

            steps.push({
                type: "sortingCompare",
                algorithm: "insertion",
                indices: [j - 1, j],
                array: [...array]
            });

            if (array[j - 1] <= array[j]) {
                break;
            }

            [
                array[j - 1],
                array[j]
            ] = [
                array[j],
                array[j - 1]
            ];

            steps.push({
                type: "sortingSwap",
                algorithm: "insertion",
                indices: [j - 1, j],
                array: [...array]
            });

            j--;
        }

        steps.push({
            type: "sortingSorted",
            algorithm: "insertion",
            index: i,
            array: [...array]
        });
    }

    steps.push({
        type: "sortingComplete",
        algorithm: "insertion",
        array: [...array],
        sortedIndexes: Array.from(
            { length: array.length },
            (_, index) => index
        )
    });

    return {
        result: array,
        steps
    };
}

export default insertionSort;