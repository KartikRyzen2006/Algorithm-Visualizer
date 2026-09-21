const arrayTraversal = (input) => {

    const array = [...input];
    const steps = [];

    for (let i = 0; i < array.length; i++) {

        steps.push({
            type: "arrayVisit",
            index: i,
            array: [...array]
        });

    }

    steps.push({
        type: "arrayComplete",
        array: [...array]
    });

    return {
        result: array,
        steps
    };
};

export default arrayTraversal;