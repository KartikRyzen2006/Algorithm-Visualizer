function ArrayBar({
    value,
    index,
    isActive,
    operationType,
    isSorted,
    currentVisitIndex,
    foundIndex
}) {

    let background = "black";

    if (index === foundIndex) {
        background = "green";
    } else if (index === currentVisitIndex) {
        background = "blue";
    } else if (isSorted) {
        background = "green";
    } else if (isActive) {
        if (operationType === "compare") {
            background = "red";
        } else if (operationType === "swap") {
            background = "yellow";
        }
    }

    return (
        <div
            className="array-bar"
            style={{
                height: `${value * 10}px`,
                background: background
            }}
        >
            {value}
        </div>
    );
}

export default ArrayBar;