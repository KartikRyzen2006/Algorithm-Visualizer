function GraphVisualizer({
    vertices = [],
    graph = {},
    visited = [],
    activeVertex = null
}) {
    if (vertices.length === 0) {
        return (
            <div className="graph-empty">
                Graph is empty
            </div>
        );
    }

    const width = 700;
    const height = 450;

    // Arrange vertices in a circle
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;

    const positions = {};

    vertices.forEach((vertex, index) => {
        const angle =
            (2 * Math.PI * index) / vertices.length;

        positions[vertex] = {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        };
    });

    // Prevent duplicate edges
    const edges = [];
    const edgeSet = new Set();

    vertices.forEach(vertex => {
        const neighbors = graph[vertex] || [];

        neighbors.forEach(neighbor => {
            const key = [vertex, neighbor]
                .sort()
                .join("-");

            if (!edgeSet.has(key)) {
                edgeSet.add(key);

                edges.push({
                    from: vertex,
                    to: neighbor
                });
            }
        });
    });

    return (
        <div className="graph-visualizer">

            <svg
                width={width}
                height={height}
                className="graph-svg"
            >

                {/* EDGES */}

                {edges.map((edge, index) => {
                    const from =
                        positions[edge.from];

                    const to =
                        positions[edge.to];

                    return (
                        <line
                            key={index}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            className="graph-edge"
                        />
                    );
                })}

                {/* NODES */}

                {vertices.map(vertex => {
                    const position =
                        positions[vertex];

                    const isVisited =
                        visited.includes(vertex);

                    const isActive =
                        activeVertex === vertex;

                    return (
                        <g key={vertex}>

                            <circle
                                cx={position.x}
                                cy={position.y}
                                r="30"
                                className={`
                                    graph-node
                                    ${isVisited ? "visited" : ""}
                                    ${isActive ? "active" : ""}
                                `}
                            />

                            <text
                                x={position.x}
                                y={position.y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="graph-node-label"
                            >
                                {vertex}
                            </text>

                        </g>
                    );
                })}

            </svg>

        </div>
    );
}

export default GraphVisualizer;