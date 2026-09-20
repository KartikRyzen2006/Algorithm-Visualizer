const createLinkedListOperations = () => {

    const operations = [];

    // APPEND
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

    // PREPEND
    operations.push({
        type: "prepend",
        value: 5
    });

    // APPEND
    operations.push({
        type: "append",
        value: 40
    });

    // DELETE
    operations.push({
        type: "delete",
        value: 20
    });

    return operations;
};

export default createLinkedListOperations;