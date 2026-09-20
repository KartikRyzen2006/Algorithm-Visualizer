import "./LinkedListVisualizer.css"

function LinkedListVisualizer({ linkedList = [] }) {

    if (linkedList.length === 0) {
        return (
            <div className="linked-list-empty">
                Linked List is empty
            </div>
        );
    }

    return (
        <div className="linked-list-visualizer">

            <div className="linked-list-label">
                HEAD
            </div>

            <div className="linked-list-container">

                {linkedList.map((value, index) => (
                    <div
                        className="linked-list-item"
                        key={`${value}-${index}`}
                    >

                        <div className="linked-list-node">
                            {value}
                        </div>

                        {index < linkedList.length - 1 && (
                            <div className="linked-list-arrow">
                                →
                            </div>
                        )}

                        {index === linkedList.length - 1 && (
                            <div className="linked-list-null">
                                NULL
                            </div>
                        )}

                    </div>
                ))}

            </div>

        </div>
    );
}

export default LinkedListVisualizer;