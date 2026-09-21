const prefixSum = (input) => {

    const array = [...input];
    const prefix = [];

    const steps = [];

    for (let i = 0; i < array.length; i++) {

        if (i === 0) {
            prefix[i] = array[i];
        } else {
            prefix[i] =
                prefix[i - 1] + array[i];
        }

        steps.push({
            type: "prefixSum",
            index: i,
            value: prefix[i],
            array: [...array],
            prefix: [...prefix]
        });
    }

    steps.push({
        type: "prefixComplete",
        array: [...array],
        prefix: [...prefix]
    });

    return {
        result: prefix,
        steps
    };
};

export default prefixSum;