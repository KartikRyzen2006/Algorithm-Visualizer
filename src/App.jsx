import {useState, useEffect} from "react"
import ArrayBar from "./components/ArrayBar/ArrayBar";
import traverse from "./algorithms/arrays/traverse";
import containsDuplicate from "./algorithms/arrays/containsDuplicate";
import bubbleSort from "./algorithms/sorting/bubbleSort";
import visualizationEngine from "./engine/visualizationEngine";
import selectionSort from "./algorithms/sorting/selectionSort";
import binarySearch from "./algorithms/searching/binarySearch";

function App () {
    const array = [1,2,3,4,5,6,7,8];
    const target = 6;

    const [currentStep, setCurrentStep] = useState(-1);
    const [visualArray, setVisualArray] = useState(array);
    const [sortedIndexes,setSortedIndexes] = useState([]);
    const [isPlaying,setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(500);
    const [currentVisitIndex,setCurrentVisitIndex] = useState(null);
    const [foundIndex,setFoundIndex] = useState(null);

    const operations = binarySearch(array,target);
    const currentOperation = operations[currentStep];

    const handleNextStep = () => {
        if(currentStep === -1) {
            setCurrentStep(0);
            return;
        }
        if(!currentOperation) return;
       const result = visualizationEngine (visualArray,currentOperation,sortedIndexes,currentVisitIndex,foundIndex)

        setVisualArray(result.array);
        setSortedIndexes(result.sortedIndexes);
        setCurrentVisitIndex(result.currentVisitIndex);
        setFoundIndex(result.foundIndex);
        
       

       setCurrentStep ( currentStep < operations.length-1 ? 
        currentStep + 1 : currentStep)
       ;
    
    }

    useEffect(() => {
        if(!isPlaying) return;

        const timer = setTimeout(() => {
            handleNextStep();
        },speed)

        return () => clearTimeout(timer);
    },[isPlaying,currentStep,speed]);

    console.log("STEP:", currentStep);
console.log("OPERATION:", currentOperation);

    console.log(operations);
    console.log(currentStep);
    
    
    return (
        <div>
            <h1>Algorithm Visualizer</h1>

            <div className="array-container">
            {visualArray.map((value,index)=> (
                <ArrayBar value={value}
                index={index}
                isActive = {currentOperation && ( index === currentOperation.index1
                    || index == currentOperation.index2
                )}
                operationType = {currentOperation?.type}
                isSorted = {sortedIndexes.includes(index)}
                currentVisitIndex={currentVisitIndex}
                foundIndex={foundIndex}/>
            ))}
            </div>

            <button onClick={handleNextStep}>
                Next Step
            </button>

            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Pause" : "Play"}
            </button>

            <label>
                Speed:
                <select
                    value = {speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                >
                    <option value={1000}> Slow </option>
                    <option value={500}>Medium </option>
                    <option value={100}>Fast</option>
                    
                </select>
            </label>

            <button onClick={() => {
                setCurrentStep(-1)
                setVisualArray(array);
                setSortedIndexes([]);
                setCurrentVisitIndex(null);
                setFoundIndex(null);
                setIsPlaying(false);
            }}>
                Reset
            </button>
        </div>
        
    );
}
export default App;