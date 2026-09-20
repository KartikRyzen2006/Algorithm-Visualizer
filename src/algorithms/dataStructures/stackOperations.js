const createStackOperations = () => {

    const operations = [];

    const values = [10, 20, 30, 40];

    /*
     * PUSH
     */

    values.forEach(value => {

        operations.push({
            type: "push",
            value
        });

    });


    /*
     * POP
     */

    operations.push({
        type: "pop"
    });

    operations.push({
        type: "pop"
    });


    /*
     * PUSH AGAIN
     */

    operations.push({
        type: "push",
        value: 50
    });

    return operations;
};

export default createStackOperations;