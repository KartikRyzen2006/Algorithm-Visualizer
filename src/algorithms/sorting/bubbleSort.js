function bubbleSort(input) {
    const array = [...input];
    const steps = [];

    for (let i = 0; i < array.length; i++) {

        let swapped = false;

        for (let j = 0; j < array.length - i - 1; j++) {

            steps.push({
                type: "sortingCompare",
                algorithm: "bubble",
                indices: [j, j + 1],
                array: [...array],
                sortedIndexes: [
                    ...Array.from(
                        { length: i },
                        (_, index) => array.length - 1 - index
                    )
                ]
            });

            if (array[j] > array[j + 1]) {

                [
                    array[j],
                    array[j + 1]
                ] = [
                    array[j + 1],
                    array[j]
                ];

                swapped = true;

                steps.push({
                    type: "sortingSwap",
                    algorithm: "bubble",
                    indices: [j, j + 1],
                    array: [...array]
                });
            }
        }

        steps.push({
            type: "sortingSorted",
            algorithm: "bubble",
            index: array.length - 1 - i,
            array: [...array]
        });

        if (!swapped) {
            break;
        }
    }

    steps.push({
        type: "sortingComplete",
        algorithm: "bubble",
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

export default bubbleSort;