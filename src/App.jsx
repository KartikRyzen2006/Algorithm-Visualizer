import {useState, useEffect} from "react";
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
import BST from "./algorithms/dataStructures/bst.js";
import TreeVisualizer from "./components/TreeVisualizer/TreeVisualizer";
import createTreeOperations from "./algorithms/dataStructures/treeOperations.js";
import MinHeap from "./algorithms/heap/minHeap";
import HeapVisualizer from "./components/HeapVisualizer/HeapVisualizer";
import MaxHeap from "./algorithms/heap/maxHeap";
import Graph from "./algorithms/graph/Graph";
import bfs from "./algorithms/graph/bfs";
import dfs from "./algorithms/graph/dfs";
import GraphVisualizer from "./components/GraphVisualizer/GraphVisualizer";

const createBST = () => {
    const bst = new BST();

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.insert(12);
    bst.insert(20);

    return bst;
};

const createHeapOperations = (heapType) => {
    const heap =
        heapType === "max"
            ? new MaxHeap()
            : new MinHeap();

    heap.insert(20);
    heap.insert(10);
    heap.insert(30);
    heap.insert(5);
    heap.insert(15);

    if (heapType === "max") {
        heap.extractMax();
    } else {
        heap.extractMin();
    }

    return heap.getSteps();
};

const createGraphData = (algorithm) => {
    const graph = new Graph();

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");

    const result =
        algorithm === "dfs"
            ? dfs(graph, "A")
            : bfs(graph, "A");

    return {
        graph: graph.getGraph(),
        vertices: graph.getVertices(),
        steps: result.steps
    };
};
function App () {
    const array = [1,2,3,4,5,6,7,8];
    const target = 6;
   
const bst = createBST();

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
    const [treeRoot, setTreeRoot] = useState(bst.root);
    const [traversal, setTraversal] = useState("inorder");
    const [treeTarget, setTreeTarget] = useState(12);
    const [heap, setHeap] = useState([]);
    const [visualizationMode, setVisualizationMode] = useState("tree");
    const [heapType, setHeapType] = useState("min");
    const [heapHighlighted, setHeapHighlighted] = useState([]);
    const [heapStats, setHeapStats] = useState({
    steps: 0,
    comparisons: 0,
    swaps: 0,
    insertions: 0,
    extractions: 0
    });
    const [graphAlgorithm, setGraphAlgorithm] = useState("bfs");
    const [graphVisited, setGraphVisited] = useState([]);
    const [graphActiveVertex, setGraphActiveVertex] = useState(null);
    const [graphStats, setGraphStats] = useState({
    steps: 0,
    comparisons: 0,
    visited: 0,
    traversalOrder: []
    });

    const treeOperations = createTreeOperations(
        traversal,
        treeTarget
    );

    const heapOperations =
    createHeapOperations(heapType);
    const graphData = createGraphData(graphAlgorithm);

    const operations =
    visualizationMode === "heap"
        ? heapOperations
        : visualizationMode === "graph"
            ? graphData.steps
            : treeOperations;  
    
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
        linkedList,
        treeRoot,
        heap,
        graphVisited,
        graphActiveVertex
    );

    setVisualArray(result.array);
    setSortedIndexes(result.sortedIndexes);
    setCurrentVisitIndex(result.currentVisitIndex);
    setFoundIndex(result.foundIndex);
    setStack(result.stack);
    setQueue(result.queue);
    setLinkedList(result.linkedList);
    setTreeRoot(result.treeRoot);
    setHeap(result.heap);
    setHeapHighlighted(result.heapHighlighted);
    setGraphVisited(result.graphVisited);
    setGraphActiveVertex(result.graphActiveVertex);

    if (visualizationMode === "heap") {
    setHeapStats(prev => ({
        ...prev,
        steps: prev.steps + 1,

        comparisons:
            prev.comparisons +
            (currentOperation.type === "compare" ? 1 : 0),

        swaps:
            prev.swaps +
            (
                currentOperation.type === "swap" &&
                currentOperation.array
                    ? 1
                    : 0
            ),

        insertions:
            prev.insertions +
            (currentOperation.type === "insert" ? 1 : 0),

        extractions:
            prev.extractions +
            (currentOperation.type === "extract" ? 1 : 0)
        }));
    }
    if (visualizationMode === "graph") {
    setGraphStats(prev => ({
        ...prev,
        steps: prev.steps + 1,
        comparisons:
            prev.comparisons +
            (currentOperation.type === "graphCompare" ? 1 : 0),
        visited: result.graphVisited.length,
        traversalOrder:
            currentOperation.order || prev.traversalOrder
    }));
    }

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
                setTreeRoot(createBST().root);
                setHeap([]);
                setHeapHighlighted([]);
                setHeapStats({
                steps: 0,
                comparisons: 0,
                swaps: 0,
                insertions: 0,
                extractions: 0
                });
                setGraphVisited([]);
                setGraphActiveVertex(null);

                setGraphStats({
                    steps: 0,
                    comparisons: 0,
                    visited: 0,
                    traversalOrder: []
                });
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

            {visualizationMode === "heap" && (
            <>
        <h2>
        {heapType === "min"
        ? "Min Heap"
        : "Max Heap"}
        </h2>

        <HeapVisualizer
            heap={heap}
            highlighted={heapHighlighted}
        />

        <div className="heap-statistics">
            <h3>Heap Analysis</h3>

            <p>
                Steps: {heapStats.steps}
            </p>

            <p>
                Comparisons: {heapStats.comparisons}
            </p>

            <p>
                Swaps: {heapStats.swaps}
            </p>

            <p>
                Insertions: {heapStats.insertions}
            </p>

            <p>
                Extractions: {heapStats.extractions}
            </p>

            <p>
                 Time Complexity: O(log n)
            </p>

            <p>
                 Space Complexity: O(n)
            </p>
        </div>
        </>
        )}

            <h2>Algorithm / Data Structure</h2>

            <label>
                Visualization:

                <select
                    value={visualizationMode}
                    onChange={(e) => {
                        setVisualizationMode(e.target.value);
                        setCurrentStep(-1);
                        setIsPlaying(false);
                        setHeap([]);
                    }}
                >
                    <option value="tree">Binary Tree / BST</option>
                    <option value="heap">Heap</option>
                    <option value="graph">Graph</option>
                </select>

            {visualizationMode === "graph" && (
                <label>
                    Graph Algorithm:

                    <select
                        value={graphAlgorithm}
                        onChange={(e) => {
                            setGraphAlgorithm(e.target.value);
                            setCurrentStep(-1);
                            setIsPlaying(false);
                            setGraphVisited([]);
                            setGraphActiveVertex(null);
                        }}
                    >
                        <option value="bfs">BFS</option>
                        <option value="dfs">DFS</option>
                    </select>
                </label>
            )}
            </label>

            {visualizationMode === "heap" && (
            <label>
                Heap Type:

                    <select
                        value={heapType}
                        onChange={(e) => {
                            setHeapType(e.target.value);

                            setCurrentStep(-1);
                            setIsPlaying(false);
                            setHeap([]);
                            setHeapHighlighted([]);

                            setHeapStats({
                                steps: 0,
                                comparisons: 0,
                                swaps: 0,
                                insertions: 0,
                                extractions: 0
                            });
                        }}
                    >
                        <option value="min">Min Heap</option>
                        <option value="max">Max Heap</option>
                    </select>
                </label>
            )}

            <h2>Binary Tree</h2>

            <label>
                Traversal:

                <select
                    value={traversal}
                    onChange={(e) => {
                        setTraversal(e.target.value);
                        setCurrentStep(-1);
                        setCurrentVisitIndex(null);
                        setFoundIndex(null);
                        setIsPlaying(false);
                    }}
                >
                    <option value="preorder">Preorder</option>
                    <option value="inorder">Inorder</option>
                    <option value="postorder">Postorder</option>
                    <option value="levelorder">Level Order</option>
                    <option value="search">BST Search</option>

                    {traversal === "search" && (
                    <label>
                        Target:
                        <input
                            type="number"
                            value={treeTarget}
                            onChange={(e) => setTreeTarget(Number(e.treeTarget.value))}
                        />
                    </label>
                )}
                </select>
            </label>
            <TreeVisualizer root = {treeRoot}
            currentVisitIndex={currentVisitIndex}
            foundIndex={foundIndex}/>

            {visualizationMode === "graph" && (
            <>
                        <h2>
                            {graphAlgorithm === "bfs"
                                ? "Breadth First Search (BFS)"
                                : "Depth First Search (DFS)"}
                        </h2>

                        <GraphVisualizer
                            vertices={graphData.vertices}
                            graph={graphData.graph}
                            visited={graphVisited}
                            activeVertex={graphActiveVertex}
                        />
                        <div className="graph-statistics">
                        <h3>Graph Analysis</h3>

                        <p>
                            Algorithm:{" "}
                            {graphAlgorithm === "bfs" ? "BFS" : "DFS"}
                        </p>

                        <p>
                            Steps: {graphStats.steps}
                        </p>

                        <p>
                            Nodes Visited: {graphStats.visited}
                        </p>

                        <p>
                            Comparisons: {graphStats.comparisons}
                        </p>

                        <p>
                            Traversal Order:{" "}
                            {graphStats.traversalOrder.length > 0
                                ? graphStats.traversalOrder.join(" → ")
                                : "-"}
                        </p>

                        <p>
                            Time Complexity: O(V + E)
                        </p>

                        <p>
                            Space Complexity: O(V)
                        </p>
                    </div>
                    </>
                )}
             </div>

            
        

        
    );
}
export default App;