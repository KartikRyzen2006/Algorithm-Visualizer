import {useState, useEffect} from "react"
import ArrayBar from "./components/ArrayBar/ArrayBar";
import traverse from "./algorithms/arrays/traverse";
import containsDuplicate from "./algorithms/arrays/containsDuplicate";
import bubbleSort from "./algorithms/sorting/bubbleSort";
import visualizationEngine from "./engine/visualizationEngine";
import selectionSort from "./algorithms/sorting/selectionSort";
import binarySearch from "./algorithms/searching/binarySearch";
import stack from "./algorithms/dataStructures/stack";
import createQueueOperation from "./algorithms/dataStructures/queue";
import createLinkedListOperations from "./algorithms/dataStructures/linkedListOperations";
import LinkedListVisualizer from "./components/LinkedListVisualizer/LinkedListVisualizer";

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
    const [stack,setStack] = useState([]);
    const [queue,setQueue] = useState([]);
    const [linkedList,setLinkedList] = useState([]);

    const operations = createLinkedListOperations();
    const currentOperation =
    currentStep >= 0 && currentStep < operations.length
        ? operations[currentStep]
        : null;
    

    console.log("STACK:", stack);
    console.log("QUEUE:",queue);
    console.log("LINKED LIST:",linkedList);
    
    

  const handleNextStep = () => {
    if (currentStep === -1) {
        setCurrentStep(0);
        return;
    }

    if (currentStep >= operations.length) {
        setIsPlaying(false);
        return;
    }

    const result = visualizationEngine(
        visualArray,
        currentOperation,
        sortedIndexes,
        currentVisitIndex,
        foundIndex,
        stack,
        queue,
        linkedList
    );

    setVisualArray(result.array);
    setSortedIndexes(result.sortedIndexes);
    setCurrentVisitIndex(result.currentVisitIndex);
    setFoundIndex(result.foundIndex);
    setStack(result.stack);
    setQueue(result.queue);
    setLinkedList(result.linkedList);

    setCurrentStep(currentStep + 1);
};
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
                    || index === currentOperation.index2
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
                setStack([]);
                setQueue([]);
                setLinkedList([]);
            }}>
                Reset
            </button>

            <h2>Stack - TOP</h2>
            <div className= "stack-container">
                {stack.map((value,index) => (
                    <div className="stack-item" key={index}>
                        {value} 
                        {index === stack.length-1 && (
                            <span className="top-label"> ← TOP </span>
                        )}
                    </div>
                ))}
            </div>

            <h2>Queue</h2>
            <div className="queue-container">
                <span className="queue-label">FRONT →</span>
                {queue.map((value,index) => (
                    <div className="queue-item" key = {index}>
                        {value}
                        </div>
                ))}
                <span className="queue-label">← REAR</span>
            </div>

            <h2>Linked List</h2>
            <LinkedListVisualizer linkedList ={linkedList}/>
             </div>
        

        
    );
}
export default App;