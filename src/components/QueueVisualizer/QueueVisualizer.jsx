import "./QueueVisualizer.css";

function QueueVisualizer({ queue = [] }) {

    if (queue.length === 0) {
        return (
            <div className="queue-empty">
                Queue is empty
            </div>
        );
    }

    return (
        <div className="queue-visualizer">

            <div className="queue-label">
                FRONT
            </div>

            <div className="queue-container">

                {queue.map((value, index) => (
                    <div
                        className={`queue-node ${
                            index === 0
                                ? "queue-front"
                                : index === queue.length - 1
                                    ? "queue-rear"
                                    : ""
                        }`}
                        key={`${value}-${index}`}
                    >
                        {value}
                    </div>
                ))}

            </div>

            <div className="queue-rear-label">
                REAR
            </div>

        </div>
    );
}

export default QueueVisualizer;