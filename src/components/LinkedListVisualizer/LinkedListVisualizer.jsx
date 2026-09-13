function LinkedListVisualizer({ linkedList }) {
    return (
        <div className="linked-list-container">
            <span className="head-label">HEAD →</span>

            {linkedList.map((value, index) => (
                <span key={index}>
                    <span className="linked-list-node">
                        {value}
                    </span>

                    {index < linkedList.length - 1 && (
                        <span className="arrow"> → </span>
                    )}
                </span>
            ))}

            <span className="null-label"> → NULL</span>
        </div>
    );
}

export default LinkedListVisualizer;