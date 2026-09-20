const createQueueOperations = () => {

    const operations = [];

    const values = [10, 20, 30, 40];

    // ENQUEUE
    values.forEach(value => {
        operations.push({
            type: "enqueue",
            value
        });
    });

    // DEQUEUE
    operations.push({
        type: "dequeue"
    });

    operations.push({
        type: "dequeue"
    });

    // ENQUEUE AGAIN
    operations.push({
        type: "enqueue",
        value: 50
    });

    return operations;
};

export default createQueueOperations;