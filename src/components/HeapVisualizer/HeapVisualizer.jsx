function HeapVisualizer({ heap = [], highlighted = [] }) {
    if (heap.length === 0) {
        return (
            <div className="heap-empty">
                Heap is empty
            </div>
        );
    }

    const levels = Math.floor(Math.log2(heap.length)) + 1;
    const height = levels * 110;

    const getNodePosition = (index) => {
        const level = Math.floor(Math.log2(index + 1));

        const firstIndexAtLevel = Math.pow(2, level) - 1;
        const positionInLevel = index - firstIndexAtLevel;

        const nodesAtLevel = Math.pow(2, level);

        const x =
            ((positionInLevel + 0.5) / nodesAtLevel) * 100;

        const y = level * 110 + 45;

        return { x, y };
    };

    return (
        <div
            className="heap-tree"
            style={{ height: `${height}px` }}
        >
            {/* SVG CONNECTIONS */}
            <svg
                className="heap-connections"
                viewBox={`0 0 100 ${height}`}
                preserveAspectRatio="none"
            >
                {heap.map((_, index) => {
                    if (index === 0) {
                        return null;
                    }

                    const parentIndex = Math.floor(
                        (index - 1) / 2
                    );

                    const parent = getNodePosition(parentIndex);
                    const child = getNodePosition(index);

                    return (
                        <line
                            key={`edge-${index}`}
                            x1={parent.x}
                            y1={parent.y}
                            x2={child.x}
                            y2={child.y}
                            className="heap-connection"
                        />
                    );
                })}
            </svg>

            {/* HEAP NODES */}
            {heap.map((value, index) => {
                const { x, y } = getNodePosition(index);

                const isHighlighted =
                    highlighted.includes(index);

                return (
                    <div
                        key={index}
                        className={`heap-node-wrapper ${
                            isHighlighted
                                ? "heap-node-highlighted"
                                : ""
                        }`}
                        style={{
                            left: `${x}%`,
                            top: `${y}px`
                        }}
                    >
                        <div className="heap-node">
                            {value}
                        </div>

                        <span className="heap-node-index">
                            index {index}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default HeapVisualizer;