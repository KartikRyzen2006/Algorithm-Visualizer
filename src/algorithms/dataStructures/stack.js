const stack = () => {
    const operations = [];

    operations.push({
        type: "push",
        value: 10
    });

    operations.push({
        type: "push",
        value: 20
    });

    operations.push({
        type: "push",
        value: 30
    });

    operations.push({
        type: "pop",
        value: 30
    });

    operations.push({
        type: "push",
        value: 40
    });

    return operations;
};

export default stack;