const createLinkedListOperations = () => {
    const operations = [];

    operations.push({
        type: "append",
        value: 10
    });

    operations.push({
        type: "append",
        value: 20
    });

    operations.push({
        type: "append",
        value: 30
    });

    operations.push({
        type: "prepend",
        value: 5
    });

    operations.push({
        type: "delete",
        value: 20
    });

    return operations;
};

export default createLinkedListOperations;