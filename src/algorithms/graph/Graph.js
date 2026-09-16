class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.steps = [];
    }

    // Add a vertex
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }

        this.steps.push({
            type: "addVertex",
            vertex,
            graph: this.getGraph()
        });
    }

    // Add an undirected edge
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }

        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);

        this.steps.push({
            type: "addEdge",
            edge: [vertex1, vertex2],
            graph: this.getGraph()
        });
    }

    // Remove an edge
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(
                vertex1,
                this.adjacencyList
                    .get(vertex1)
                    .filter(vertex => vertex !== vertex2)
            );
        }

        if (this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(
                vertex2,
                this.adjacencyList
                    .get(vertex2)
                    .filter(vertex => vertex !== vertex1)
            );
        }

        this.steps.push({
            type: "removeEdge",
            edge: [vertex1, vertex2],
            graph: this.getGraph()
        });
    }

    // Remove vertex
    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }

        for (const neighbor of this.adjacencyList.get(vertex)) {
            this.adjacencyList.set(
                neighbor,
                this.adjacencyList
                    .get(neighbor)
                    .filter(v => v !== vertex)
            );
        }

        this.adjacencyList.delete(vertex);

        this.steps.push({
            type: "removeVertex",
            vertex,
            graph: this.getGraph()
        });
    }

    // Get adjacency list
    getGraph() {
        return Object.fromEntries(
            [...this.adjacencyList].map(
                ([vertex, neighbors]) => [
                    vertex,
                    [...neighbors]
                ]
            )
        );
    }

    // Get neighbors
    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex) || [];
    }

    // Get all vertices
    getVertices() {
        return [...this.adjacencyList.keys()];
    }

    // Get steps
    getSteps() {
        return [...this.steps];
    }

    clearSteps() {
        this.steps = [];
    }

    clear() {
        this.adjacencyList.clear();
        this.steps = [];
    }
}

export default Graph;