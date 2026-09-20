import "./StackVisualizer.css";

function StackVisualizer({ stack = [] }) {

    if (stack.length === 0) {
        return (
            <div className="stack-empty">
                Stack is empty
            </div>
        );
    }

    return (
        <div className="stack-visualizer">

            <div className="stack-container">

                <div className="stack-label">
                    TOP
                </div>

                <div className="stack-items">

                    {[...stack]
                        .reverse()
                        .map((value, index) => {

                            return (
                                <div
                                    className="stack-node"
                                    key={`${value}-${index}`}
                                >
                                    {value}
                                </div>
                            );

                        })}

                </div>

                <div className="stack-bottom">
                    BOTTOM
                </div>

            </div>

        </div>
    );
}

export default StackVisualizer;