function StepLog({ operations = [], currentStep }) {

    return (
        <div className="step-log-card">

            <h2>Step Log</h2>

            <div className="step-log">

                {operations.length === 0 ? (

                    <p className="step-log-empty">
                        No operations available.
                    </p>

                ) : (

                    operations.map((operation, index) => {

                        const isCurrent = index === currentStep;

                        let text = operation.type;

                        if (operation.type === "compare") {
                            text = "Compare elements";
                        }

                        if (operation.type === "swap") {
                            text = "Swap elements";
                        }

                        if (operation.type === "visit") {
                            text = "Visit element";
                        }

                        if (operation.type === "found") {
                            text = "Target found";
                        }

                        if (operation.type === "graphVisit") {
                            text = `Visit ${operation.vertex}`;
                        }

                        if (operation.type === "graphCompare") {
                            text = "Compare graph edge";
                        }

                        if (operation.type === "graphDequeue") {
                            text = `Process ${operation.vertex}`;
                        }

                        if (operation.type === "graphBacktrack") {
                            text = `Backtrack from ${operation.vertex}`;
                        }

                        if (operation.type === "dpInit") {
                            text = `Initialize dp[${operation.index}]`;
                        }

                        if (operation.type === "dpCompare") {
                            text = `Compare DP states`;
                        }

                        if (operation.type === "dpUpdate") {
                            text = `Update dp[${operation.index}]`;
                        }

                        return (
                            <div
                                key={index}
                                className={`step-log-item ${
                                    isCurrent ? "current" : ""
                                }`}
                            >
                                <span className="step-dot"></span>

                                <span>
                                    {text}
                                </span>
                            </div>
                        );
                    })

                )}

            </div>

        </div>
    );
}

export default StepLog;