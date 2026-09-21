import "./BinarySearchVisualizer.css";

function BinarySearchVisualizer({
    array = [],
    low = null,
    mid = null,
    high = null,
    foundIndex = null
}) {

    return (
        <div className="binary-search-visualizer">

            <div className="binary-search-bars">

                {array.map((value, index) => {

                    const isLow =
                        index === low;

                    const isMid =
                        index === mid;

                    const isHigh =
                        index === high;

                    const isFound =
                        index === foundIndex;

                    return (
                        <div
                            key={index}
                            className="binary-search-item"
                        >

                            <div
                                className={`
                                    binary-search-value
                                    ${isLow ? "binary-low" : ""}
                                    ${isMid ? "binary-mid" : ""}
                                    ${isHigh ? "binary-high" : ""}
                                    ${isFound ? "binary-found" : ""}
                                `}
                            >
                                {value}
                            </div>

                            <span className="binary-search-index">
                                index {index}
                            </span>

                            <div className="binary-search-label">

                                {isFound && "FOUND"}

                                {!isFound && isMid && "MID"}

                                {!isFound &&
                                    !isMid &&
                                    isLow &&
                                    "LOW"}

                                {!isFound &&
                                    !isMid &&
                                    !isLow &&
                                    isHigh &&
                                    "HIGH"}

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default BinarySearchVisualizer;