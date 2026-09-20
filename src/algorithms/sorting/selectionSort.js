function selectionSort(input) {
    const array = [...input];
    const steps = [];

    for (let i = 0; i < array.length - 1; i++) {

        let minIndex = i;

        steps.push({
            type: "sortingSelectMin",
            algorithm: "selection",
            index: minIndex,
            array: [...array]
        });

        for (let j = i + 1; j < array.length; j++) {

            steps.push({
                type: "sortingCompare",
                algorithm: "selection",
                indices: [minIndex, j],
                array: [...array]
            });

            if (array[j] < array[minIndex]) {

                minIndex = j;

                steps.push({
                    type: "sortingSelectMin",
                    algorithm: "selection",
                    index: minIndex,
                    array: [...array]
                });
            }
        }

        if (minIndex !== i) {

            [
                array[i],
                array[minIndex]
            ] = [
                array[minIndex],
                array[i]
            ];

            steps.push({
                type: "sortingSwap",
                algorithm: "selection",
                indices: [i, minIndex],
                array: [...array]
            });
        }

        steps.push({
            type: "sortingSorted",
            algorithm: "selection",
            index: i,
            array: [...array]
        });
    }

    steps.push({
        type: "sortingComplete",
        algorithm: "selection",
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

export default selectionSort;