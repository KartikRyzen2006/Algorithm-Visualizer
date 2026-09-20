function OperationPanel({ currentOperation }) {

    if (!currentOperation) {
        return (
            <div className="operation-panel">

                <h2>Current Operation</h2>

                <div className="operation-empty">
                    Press <strong>Next Step</strong> or <strong>Play</strong> to begin.
                </div>

            </div>
        );
    }

    const getOperationName = () => {

        const type = currentOperation.type;

        if (
            type === "compare" ||
            type === "graphCompare" ||
            type === "dpCompare"
        ) {
            return "Compare";
        }

        if (type === "swap") {
            return "Swap";
        }

        if (
            type === "visit" ||
            type === "graphVisit"
        ) {
            return "Visit";
        }

        if (type === "dpUpdate") {
            return "Update";
        }

        if (type === "dpInit") {
            return "Initialize";
        }

        if (type === "insert") {
            return "Insert";
        }

        if (type === "extract") {
            return "Extract";
        }

        if (type === "graphDequeue") {
            return "Process Vertex";
        }

        if (type === "graphBacktrack") {
            return "Backtrack";
        }

        return type;
    };

    return (
        <div className="operation-panel">

            <h2>Current Operation</h2>

            <div className="operation-grid">

                <div className="operation-main">

                    <div className="operation-title">

                        <span className="operation-indicator"></span>

                        <h3>
                            {getOperationName()}
                        </h3>

                    </div>

                    <p>
                        Operation currently being executed by the algorithm.
                    </p>

                </div>


                <div className="operation-box">

                    <h4>Elements</h4>

                    <p>
                        Step data is shown in the visualization above.
                    </p>

                </div>


                <div className="operation-box">

                    <h4>Action</h4>

                    <p>
                        {getOperationName()} operation in progress.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default OperationPanel;