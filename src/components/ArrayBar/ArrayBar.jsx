function ArrayBar ({value, isActive}) {


    return <div className="array-bar" style={{height: `${value * 10}px`,
   background:  isActive ? "red" : "black" }}> 
    {value}
    </div>;
}
export default ArrayBar;