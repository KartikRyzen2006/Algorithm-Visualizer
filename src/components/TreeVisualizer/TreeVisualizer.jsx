function TreeVisualizer({
    root,
    currentVisitIndex,
    foundIndex
}) {
    if (root === null) {
        return null;
    }

    const nodes = [];
    let xPosition = 0;

    /* =========================
       BUILD TREE LAYOUT
    ========================= */

    const layout = (node, depth = 0) => {
        if (node === null) {
            return null;
        }

        layout(node.left, depth + 1);

        const current = {
            node,
            depth,
            x: xPosition * 100
        };

        xPosition++;

        layout(node.right, depth + 1);

        nodes.push(current);

        return current;
    };

    layout(root);


    /* =========================
       FIND NODE POSITION
    ========================= */

    const getPosition = (value) => {
        return nodes.find(
            item => item.node.value === value
        );
    };


    /* =========================
       BUILD EDGES
    ========================= */

    const edges = [];

    nodes.forEach(({ node, depth, x }) => {

        const parentY = depth * 100 + 30;

        if (node.left !== null) {

            const child = getPosition(
                node.left.value
            );

            if (child) {
                edges.push({
                    x1: x,
                    y1: parentY,
                    x2: child.x,
                    y2: child.depth * 100 + 30
                });
            }
        }


        if (node.right !== null) {

            const child = getPosition(
                node.right.value
            );

            if (child) {
                edges.push({
                    x1: x,
                    y1: parentY,
                    x2: child.x,
                    y2: child.depth * 100 + 30
                });
            }
        }

    });


    /* =========================
       TREE DIMENSIONS
    ========================= */

    const maxDepth = Math.max(
        ...nodes.map(node => node.depth)
    );

    const minX = Math.min(
        ...nodes.map(node => node.x)
    );

    const maxX = Math.max(
        ...nodes.map(node => node.x)
    );

    const width = maxX - minX + 120;

    const height =
        (maxDepth + 1) * 100 + 60;


    /* =========================
       RENDER
    ========================= */

    return (
        <div
            className="tree-visualizer"
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
        >

            {/* TREE CONNECTIONS */}

            <svg
                className="tree-lines"
                width={width}
                height={height}
            >
                {edges.map((edge, index) => (
                    <line
                        key={index}
                        x1={edge.x1 - minX + 60}
                        y1={edge.y1}
                        x2={edge.x2 - minX + 60}
                        y2={edge.y2}
                        stroke="black"
                        strokeWidth="2"
                    />
                ))}
            </svg>


            {/* TREE NODES */}

            {nodes.map(({ node, depth, x }) => {

                const isFound =
                    node.value === foundIndex;

                const isVisiting =
                    node.value === currentVisitIndex;

                return (
                    <div
                        key={node.value}
                        className={`tree-node ${
                            isFound
                                ? "tree-node-found"
                                : isVisiting
                                    ? "tree-node-visiting"
                                    : ""
                        }`}
                        style={{
                            left: `${x - minX + 60}px`,
                            top: `${depth * 100}px`
                        }}
                    >
                        {node.value}
                    </div>
                );

            })}

        </div>
    );
}

export default TreeVisualizer;