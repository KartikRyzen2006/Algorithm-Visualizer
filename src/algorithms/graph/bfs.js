function bfs(graph, startVertex) {
    const queue = [startVertex];
    const visited = new Set();
    const steps = [];
    const order = [];

    visited.add(startVertex);

    steps.push({
        type: "graphStart",
        vertex: startVertex,
        queue: [...queue],
        visited: [...visited]
    });

    while (queue.length > 0) {
        const currentVertex = queue.shift();
        order.push(currentVertex);

        steps.push({
            type: "graphDequeue",
            vertex: currentVertex,
            queue: [...queue],
            visited: [...visited],
            order: [...order]
        });

        for (const neighbor of graph.getNeighbors(currentVertex)) {

            steps.push({
                type: "graphCompare",
                edge: [currentVertex, neighbor],
                queue: [...queue],
                visited: [...visited],
                order: [...order]
            });

            if (!visited.has(neighbor)) {

                visited.add(neighbor);
                queue.push(neighbor);

                steps.push({
                    type: "graphVisit",
                    vertex: neighbor,
                    queue: [...queue],
                    visited: [...visited],
                    order: [...order]
                });
            }
        }
    }

    steps.push({
        type: "graphComplete",
        visited: [...visited],
        order: [...order]
    });

    return {
        order,
        steps
    };
}

export default bfs;