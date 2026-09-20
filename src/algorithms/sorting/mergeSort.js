function mergeSort(input) {
    const array = [...input];
    const steps = [];

    const merge = (left, middle, right) => {

        const leftPart = array.slice(left, middle + 1);
        const rightPart = array.slice(middle + 1, right + 1);

        let i = 0;
        let j = 0;
        let k = left;

        while (
            i < leftPart.length &&
            j < rightPart.length
        ) {

            steps.push({
                type: "sortingCompare",
                algorithm: "merge",
                indices: [
                    left + i,
                    middle + 1 + j
                ],
                array: [...array]
            });

            if (leftPart[i] <= rightPart[j]) {
                array[k] = leftPart[i];
                i++;
            } else {
                array[k] = rightPart[j];
                j++;
            }

            steps.push({
                type: "sortingMerge",
                algorithm: "merge",
                index: k,
                array: [...array]
            });

            k++;
        }

        while (i < leftPart.length) {

            array[k] = leftPart[i];

            steps.push({
                type: "sortingMerge",
                algorithm: "merge",
                index: k,
                array: [...array]
            });

            i++;
            k++;
        }

        while (j < rightPart.length) {

            array[k] = rightPart[j];

            steps.push({
                type: "sortingMerge",
                algorithm: "merge",
                index: k,
                array: [...array]
            });

            j++;
            k++;
        }
    };


    const sort = (left, right) => {

        if (left >= right) {
            return;
        }

        const middle =
            Math.floor(
                (left + right) / 2
            );

        sort(left, middle);
        sort(middle + 1, right);

        merge(
            left,
            middle,
            right
        );
    };


    sort(
        0,
        array.length - 1
    );


    steps.push({
        type: "sortingComplete",
        algorithm: "merge",
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

export default mergeSort;