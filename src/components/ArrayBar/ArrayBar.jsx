function ArrayBar ({value, isActive, operationType}) {


    return <div className="array-bar" style={{height: `${value * 10}px`,
   background:  isActive ? operationType === "duplicate" ? "yellow" : "red" : "black"
    }}> 
    {value}
    </div>;
}
export default ArrayBar;