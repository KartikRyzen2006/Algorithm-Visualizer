function TreeVisualizer({ root, currentVisitIndex, foundIndex }) {
    if (root === null) {
        return null;
    }

    const nodes = [];
    let xPosition = 0;

    const buildTree = (node, depth = 0) => {
        if (node === null) {
            return null;
        }

        const left = buildTree(node.left, depth + 1);

        const current = {
            value: node.value,
            depth: depth,
            x: xPosition * 100
        };

        xPosition++;

        const right = buildTree(node.right, depth + 1);

        nodes.push(current);

        return current;
    };

    // Build positions
    xPosition = 0;
    nodes.length = 0;

    const layout = (node, depth = 0) => {
        if (node === null) {
            return null;
        }

        const left = layout(node.left, depth + 1);

        const current = {
            node: node,
            depth: depth,
            x: xPosition * 100
        };

        xPosition++;

        const right = layout(node.right, depth + 1);

        nodes.push(current);

        return current;
    };

    xPosition = 0;
    nodes.length = 0;

    layout(root);

    const getPosition = (value) => {
        return nodes.find(item => item.node.value === value);
    };

    const edges = [];

    nodes.forEach(({ node, depth, x }) => {
        const parentY = depth * 100 + 30;

        if (node.left !== null) {
            const child = getPosition(node.left.value);

            edges.push({
                x1: x,
                y1: parentY,
                x2: child.x,
                y2: child.depth * 100 + 30
            });
        }

        if (node.right !== null) {
            const child = getPosition(node.right.value);

            edges.push({
                x1: x,
                y1: parentY,
                x2: child.x,
                y2: child.depth * 100 + 30
            });
        }
    });

    const maxDepth = Math.max(...nodes.map(node => node.depth));

    const minX = Math.min(...nodes.map(node => node.x));
    const maxX = Math.max(...nodes.map(node => node.x));

    const width = maxX - minX + 120;
    const height = (maxDepth + 1) * 100 + 60;

    return (
        <div
            className="tree-visualizer"
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
        >

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

            {nodes.map(({ node, depth, x }) => {

                let background = "white";

                if (node.value === foundIndex) {
                    background = "green";
                } else if (node.value === currentVisitIndex) {
                    background = "blue";
                }

                return (
                    <div
                        key={node.value}
                        className="tree-node"
                        style={{
                            left: `${x - minX + 60}px`,
                            top: `${depth * 100}px`,
                            background: background
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