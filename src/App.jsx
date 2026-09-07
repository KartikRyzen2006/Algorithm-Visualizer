import {useState} from "react"
import ArrayBar from "./components/ArrayBar/ArrayBar";
import traverse from "./algorithms/arrays/traverse";

function App () {
    const array = [5,2,8,1,6];

    const [currentStep, setCurrentStep] = useState(0);

    const operations = traverse(array);

    console.log(operations);
    console.log(currentStep);
    
    
    return (
        <div>
            <h1>Algorithm Visualizer</h1>

            <div className="array-container">
            {array.map((value,index)=> (
                <ArrayBar value={value}
                isActive = {index === currentStep}/>
            ))}
            </div>

            <button onClick={() => setCurrentStep(currentStep < operations.length-1 ?
                currentStep+1:currentStep)}>
                Next Step
            </button>

            <button onClick={() => setCurrentStep(0)}>
                Reset
            </button>
        </div>
        
    );
}
export default App;