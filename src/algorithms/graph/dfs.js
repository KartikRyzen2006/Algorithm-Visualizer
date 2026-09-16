function dfs(graph, startVertex) {
    const visited = new Set();
    const steps = [];
    const order = [];

    function traverse(vertex) {

        visited.add(vertex);
        order.push(vertex);

        steps.push({
            type: "graphVisit",
            vertex,
            visited: [...visited],
            order: [...order]
        });

        for (const neighbor of graph.getNeighbors(vertex)) {

            steps.push({
                type: "graphCompare",
                edge: [vertex, neighbor],
                visited: [...visited],
                order: [...order]
            });

            if (!visited.has(neighbor)) {
                traverse(neighbor);
            }
        }

        steps.push({
            type: "graphBacktrack",
            vertex,
            visited: [...visited],
            order: [...order]
        });
    }

    traverse(startVertex);

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

export default dfs;