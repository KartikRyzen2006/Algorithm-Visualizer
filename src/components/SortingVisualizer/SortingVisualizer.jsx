import "./SortingVisualizer.css";

function SortingVisualizer({
    array = [],
    highlighted = [],
    sortedIndexes = [],
    pivotIndex = null
}) {
    if (array.length === 0) {
        return (
            <div className="sorting-empty">
                Press "Next Step" to start
            </div>
        );
    }

    const maxValue = Math.max(...array, 1);

    return (
        <div className="sorting-visualizer">

            <div className="sorting-bars">

                {array.map((value, index) => {

                    const isHighlighted =
                        highlighted.includes(index);

                    const isSorted =
                        sortedIndexes.includes(index);

                    const isPivot =
                        pivotIndex === index;

                    const height =
                        Math.max(
                            40,
                            (value / maxValue) * 280
                        );

                    return (
                        <div
                            key={index}
                            className={`sorting-bar-wrapper
                                ${isHighlighted ? "sorting-active" : ""}
                                ${isSorted ? "sorting-sorted" : ""}
                                ${isPivot ? "sorting-pivot" : ""}
                            `}
                        >

                            <div
                                className="sorting-value"
                                style={{
                                    height: `${height}px`
                                }}
                            >
                                {value}
                            </div>

                            <span>
                                {index}
                            </span>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default SortingVisualizer;