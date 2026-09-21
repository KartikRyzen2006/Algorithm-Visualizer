import "./ArrayTraversalVisualizer.css";

function ArrayTraversalVisualizer({
    array = [],
    activeIndex = null,
    foundIndex = null
}) {

    return (
        <div className="array-traversal-visualizer">

            <div className="array-traversal-bars">

                {array.map((value, index) => {

                    const isActive =
                        index === activeIndex;

                    const isFound =
                        index === foundIndex;

                    return (
                        <div
                            key={index}
                            className={`array-traversal-item ${
                                isActive
                                    ? "array-traversal-active"
                                    : ""
                            } ${
                                isFound
                                    ? "array-traversal-found"
                                    : ""
                            }`}
                        >

                            <div className="array-traversal-value">
                                {value}
                            </div>

                            <span className="array-traversal-index">
                                index {index}
                            </span>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default ArrayTraversalVisualizer;