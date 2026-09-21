const binarySearch = (input, target) => {

    const array = [...input];

    const steps = [];

    let low = 0;
    let high = array.length - 1;

    while (low <= high) {

        const mid = Math.floor(
            (low + high) / 2
        );

        steps.push({
            type: "binaryCompare",
            low,
            mid,
            high,
            target,
            array: [...array]
        });

        if (array[mid] === target) {

            steps.push({
                type: "binaryFound",
                low,
                mid,
                high,
                target,
                array: [...array]
            });

            return {
                result: mid,
                steps
            };
        }

        if (array[mid] < target) {

            low = mid + 1;

        } else {

            high = mid - 1;
        }
    }

    steps.push({
        type: "binaryNotFound",
        low,
        high,
        target,
        array: [...array]
    });

    return {
        result: -1,
        steps
    };
};

export default binarySearch;