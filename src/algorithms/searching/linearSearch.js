const linearSearch = (input, target) => {

    const array = [...input];
    const steps = [];

    for (let i = 0; i < array.length; i++) {

        steps.push({
            type: "searchCompare",
            index: i,
            target,
            array: [...array]
        });

        if (array[i] === target) {

            steps.push({
                type: "searchFound",
                index: i,
                target,
                array: [...array]
            });

            return {
                result: i,
                steps
            };
        }
    }

    steps.push({
        type: "searchNotFound",
        target,
        array: [...array]
    });

    return {
        result: -1,
        steps
    };
};

export default linearSearch;