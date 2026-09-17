function DPVisualizer({
    dp = [],
    activeIndex = null,
    previousIndexes = [],
    nums = [],
    operationType = null
}) {
    if (dp.length === 0) {
        return (
            <div className="dp-empty">
                Press "Next Step" to start
            </div>
        );
    }

    return (
        <div className="dp-container">

            {/* Input Array */}
            {nums.length > 0 && (
                <>
                    <h3>Input</h3>

                    <div className="dp-row">
                        {nums.map((value, index) => (
                            <div
                                key={index}
                                className={`dp-input-cell ${
                                    activeIndex === index
                                        ? "dp-active"
                                        : ""
                                }`}
                            >
                                <strong>{value}</strong>
                                <span>index {index}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* DP Table */}
            <h3>DP Table</h3>

            <div className="dp-row">

                {dp.map((value, index) => {

                    const isActive =
                        activeIndex === index;

                    const isPrevious =
                        previousIndexes.includes(index);

                    let displayValue = value;

                    if (value === Infinity) {
                        displayValue = "∞";
                    }

                    return (
                        <div
                            key={index}
                            className={`dp-cell
                                ${isActive ? "dp-active" : ""}
                                ${isPrevious ? "dp-previous" : ""}
                            `}
                        >
                            <strong>
                                {displayValue}
                            </strong>

                            <span>
                                dp[{index}]
                            </span>
                        </div>
                    );
                })}

            </div>

            {/* Operation */}
            <div className="dp-operation">

                {operationType === "dpInit" && (
                    <p>
                        Initializing DP state
                    </p>
                )}

                {operationType === "dpCompare" && (
                    <p>
                        Comparing previous DP states
                    </p>
                )}

                {operationType === "dpUpdate" && (
                    <p>
                        Updating current DP state
                    </p>
                )}

                {operationType === "dpComplete" && (
                    <p>
                        DP computation complete
                    </p>
                )}

            </div>
        </div>
    );
}

export default DPVisualizer;