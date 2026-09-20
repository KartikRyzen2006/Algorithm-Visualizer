function quickSort(input) {
    const array = [...input];
    const steps = [];

    const partition = (low, high) => {

        const pivot = array[high];

        let i = low - 1;

        for (let j = low; j < high; j++) {

            steps.push({
                type: "sortingCompare",
                algorithm: "quick",
                indices: [j, high],
                pivotIndex: high,
                array: [...array]
            });

            if (array[j] < pivot) {

                i++;

                [
                    array[i],
                    array[j]
                ] = [
                    array[j],
                    array[i]
                ];

                steps.push({
                    type: "sortingSwap",
                    algorithm: "quick",
                    indices: [i, j],
                    pivotIndex: high,
                    array: [...array]
                });
            }
        }

        [
            array[i + 1],
            array[high]
        ] = [
            array[high],
            array[i + 1]
        ];

        steps.push({
            type: "sortingSwap",
            algorithm: "quick",
            indices: [i + 1, high],
            pivotIndex: i + 1,
            array: [...array]
        });

        steps.push({
            type: "sortingSorted",
            algorithm: "quick",
            index: i + 1,
            array: [...array]
        });

        return i + 1;
    };


    const sort = (low, high) => {

        if (low >= high) {
            return;
        }

        const pivotIndex =
            partition(low, high);

        sort(
            low,
            pivotIndex - 1
        );

        sort(
            pivotIndex + 1,
            high
        );
    };


    sort(
        0,
        array.length - 1
    );


    steps.push({
        type: "sortingComplete",
        algorithm: "quick",
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

export default quickSort;