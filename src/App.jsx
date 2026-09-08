import {useState} from "react"
import ArrayBar from "./components/ArrayBar/ArrayBar";
import traverse from "./algorithms/arrays/traverse";
import containsDuplicate from "./algorithms/arrays/containsDuplicate";

function App () {
    const array = [5,2,8,2,6];

    const [currentStep, setCurrentStep] = useState(0);

    const operations = containsDuplicate(array);
    const currentOperation = operations[currentStep];

    console.log("STEP:", currentStep);
console.log("OPERATION:", currentOperation);

    console.log(operations);
    console.log(currentStep);
    
    
    return (
        <div>
            <h1>Algorithm Visualizer</h1>

            <div className="array-container">
            {array.map((value,index)=> (
                <ArrayBar value={value}
                isActive = {currentOperation && index === currentOperation.index}
                operationType = {currentOperation?.type}/>
            ))}
            </div>

            <button onClick={() => setCurrentStep(currentStep < operations.length-1 
            ? currentStep+1
            :currentStep)}>
                Next Step
            </button>

            <button onClick={() => setCurrentStep(0)}>
                Reset
            </button>
        </div>
        
    );
}
export default App;