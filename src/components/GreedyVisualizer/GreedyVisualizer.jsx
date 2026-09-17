function GreedyVisualizer({
    algorithm,
    operation
}) {
    if (!operation) {
        return (
            <div className="greedy-empty">
                Press "Next Step" to start
            </div>
        );
    }

    // =========================
    // ASSIGN COOKIES
    // =========================

    if (algorithm === "cookies") {
        const greed = operation.greed || [];
        const cookies = operation.cookies || [];

        return (
            <div className="greedy-container">

                <h3>Children's Greed</h3>

                <div className="greedy-row">
                    {greed.map((value, index) => (
                        <div
                            key={index}
                            className={`greedy-box ${
                                operation.childIndex === index
                                    ? "greedy-active"
                                    : ""
                            }`}
                        >
                            {value}

                            <span>
                                Child {index}
                            </span>
                        </div>
                    ))}
                </div>

                <h3>Cookies</h3>

                <div className="greedy-row">
                    {cookies.map((value, index) => (
                        <div
                            key={index}
                            className={`greedy-box ${
                                operation.cookieIndex === index
                                    ? "greedy-active"
                                    : ""
                            }`}
                        >
                            {value}

                            <span>
                                Cookie {index}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="greedy-result">
                    Satisfied: {operation.satisfied || 0}
                </div>
            </div>
        );
    }

    // =========================
    // STOCK PROFIT
    // =========================

    if (algorithm === "stock") {
        const prices = operation.prices || [];

        return (
            <div className="greedy-container">

                <h3>Stock Prices</h3>

                <div className="greedy-row">
                    {prices.map((value, index) => (
                        <div
                            key={index}
                            className={`greedy-box ${
                                operation.index1 === index ||
                                operation.index2 === index
                                    ? "greedy-active"
                                    : ""
                            }`}
                        >
                            {value}

                            <span>
                                Day {index}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="greedy-result">
                    Profit: {operation.profit || 0}
                </div>
            </div>
        );
    }

    // =========================
    // JUMP GAME
    // =========================

    if (
        algorithm === "jumpGame" ||
        algorithm === "jumpGameII"
    ) {
        const nums = operation.nums || [];

        return (
            <div className="greedy-container">

                <h3>Array</h3>

                <div className="greedy-row">
                    {nums.map((value, index) => (
                        <div
                            key={index}
                            className={`greedy-box ${
                                operation.index === index
                                    ? "greedy-active"
                                    : ""
                            }`}
                        >
                            {value}

                            <span>
                                Index {index}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="greedy-result">

                    {algorithm === "jumpGame" ? (
                        <>
                            Farthest Reach:{" "}
                            {operation.farthest ?? 0}
                        </>
                    ) : (
                        <>
                            Jumps:{" "}
                            {operation.jumps ?? 0}
                            <br />
                            Farthest Reach:{" "}
                            {operation.farthest ?? 0}
                            <br />
                            Current Range End:{" "}
                            {operation.currentEnd ?? 0}
                        </>
                    )}

                </div>
            </div>
        );
    }

    return null;
}

export default GreedyVisualizer;