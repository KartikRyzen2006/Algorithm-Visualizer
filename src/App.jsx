import { useState, useEffect } from "react";


import arrayTraversal from "./algorithms/arrays/arrayTraversal";
import ArrayTraversalVisualizer
    from "./components/ArrayTraversalVisualizer/ArrayTraversalVisualizer";

import linearSearch from "./algorithms/searching/linearSearch.js";

import binarySearch from "./algorithms/searching/binarySearch.js";
import BinarySearchVisualizer
    from "./components/BinarySearchVisualizer/BinarySearchVisualizer";

import prefixSum from "./algorithms/arrays/prefixSum";
import PrefixSumVisualizer
    from "./components/PrefixSumVisualizer/PrefixSumVisualizer";

import visualizationEngine from "./engine/visualizationEngine";

import LinkedListVisualizer from "./components/LinkedListVisualizer/LinkedListVisualizer";
import TreeVisualizer from "./components/TreeVisualizer/TreeVisualizer";
import HeapVisualizer from "./components/HeapVisualizer/HeapVisualizer";
import GraphVisualizer from "./components/GraphVisualizer/GraphVisualizer";
import GreedyVisualizer from "./components/GreedyVisualizer/GreedyVisualizer";
import DPVisualizer from "./components/DPVisualizer/DPVisualizer.jsx";
import StackVisualizer from "./components/StackVisualizer/StackVisualizer";

import createStackOperations from "./algorithms/dataStructures/stackOperations";
import createLinkedListOperations from "./algorithms/dataStructures/linkedListOperations.js";

import BST from "./algorithms/dataStructures/bst.js";
import createTreeOperations from "./algorithms/dataStructures/treeOperations.js";

import MinHeap from "./algorithms/heap/minHeap";
import MaxHeap from "./algorithms/heap/maxHeap";

import Graph from "./algorithms/graph/Graph";
import bfs from "./algorithms/graph/bfs";
import dfs from "./algorithms/graph/dfs";

import QueueVisualizer from "./components/QueueVisualizer/QueueVisualizer";
import createQueueOperations from "./algorithms/dataStructures/queueOperations";

import {
    assignCookies,
    stockProfit,
    jumpGame,
    jumpGameII
} from "./algorithms/greedy";

import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort
} from "./algorithms/sorting";

import climbingStairs from "./algorithms/dynamicProgramming/climbingStairs";
import houseRobber from "./algorithms/dynamicProgramming/houseRobber";
import coinChange from "./algorithms/dynamicProgramming/coinChange";
import longestIncreasingSubsequence from "./algorithms/dynamicProgramming/longestIncreasingSubsequence";

import AppLayout from "./components/Layout/AppLayout";

import AlgorithmHeader from "./components/Dashboard/AlgorithmHeader";
import ControlPanel from "./components/Dashboard/ControlPanel";
import AlgorithmInfo from "./components/Dashboard/AlgorithmInfo";
import StepLog from "./components/Dashboard/StepLog.jsx";
import OperationPanel from "./components/Dashboard/OperationPanel";

import "./components/Dashboard/Dashboard.css";

/* =========================
   SORTING
========================= */

const createSortingOperations = (algorithm, inputArray) => {

    if (algorithm === "bubble") {
        return bubbleSort(inputArray).steps;
    }

    if (algorithm === "selection") {
        return selectionSort(inputArray).steps;
    }

    if (algorithm === "insertion") {
        return insertionSort(inputArray).steps;
    }

    if (algorithm === "merge") {
        return mergeSort(inputArray).steps;
    }

    if (algorithm === "quick") {
        return quickSort(inputArray).steps;
    }

    return [];
};


/* =========================
   BINARY SEARCH TREE
========================= */

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


/* =========================
   HEAP
========================= */

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


/* =========================
   GRAPH
========================= */

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


/* =========================
   GREEDY
========================= */

const createGreedyOperations = (algorithm) => {

    if (algorithm === "cookies") {
        return assignCookies(
            [1, 2, 3],
            [1, 1, 2, 3]
        ).steps;
    }

    if (algorithm === "stock") {
        return stockProfit(
            [7, 1, 5, 3, 6, 4]
        ).steps;
    }

    if (algorithm === "jumpGame") {
        return jumpGame(
            [2, 3, 1, 1, 4]
        ).steps;
    }

    if (algorithm === "jumpGameII") {
        return jumpGameII(
            [2, 3, 1, 1, 4]
        ).steps;
    }

    return [];
};


/* =========================
   DYNAMIC PROGRAMMING
========================= */

const createDPOperations = (algorithm) => {

    if (algorithm === "climbingStairs") {
        return climbingStairs(8).steps;
    }

    if (algorithm === "houseRobber") {
        return houseRobber(
            [2, 7, 9, 3, 1]
        ).steps;
    }

    if (algorithm === "coinChange") {
        return coinChange(
            [1, 2, 5],
            11
        ).steps;
    }

    if (algorithm === "longestIncreasingSubsequence") {
        return longestIncreasingSubsequence(
            [10, 9, 2, 5, 3, 7, 101, 18]
        ).steps;
    }

    return [];
};

const initialSortingArray = [5, 2, 8, 1, 6];
/* =========================
   APP
========================= */

function App() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8];

    const bst = createBST();


    /* =========================
       GENERAL STATE
    ========================= */

    const [currentStep, setCurrentStep] = useState(-1);

    const [visualArray, setVisualArray] = useState(array);
    const [arrayActiveIndex, setArrayActiveIndex] =
    useState(null);

    const [sortedIndexes, setSortedIndexes] = useState([]);

    const [isPlaying, setIsPlaying] = useState(false);

    const [speed, setSpeed] = useState(500);

    const [currentVisitIndex, setCurrentVisitIndex] = useState(null);

    const [foundIndex, setFoundIndex] = useState(null);

     /* =========================
       SORTING
    ========================= */

    const [sortingAlgorithm, setSortingAlgorithm] =
    useState("bubble");

   const [sortingArray, setSortingArray] =
    useState(initialSortingArray);

    const [sortingHighlighted, setSortingHighlighted] =
        useState([]);

    const [sortingPivotIndex, setSortingPivotIndex] =
        useState(null);

     /* =========================
       SEARCHING
    ========================= */
    
    const [searchTarget, setSearchTarget] = useState(30);

    const [searchActiveIndex, setSearchActiveIndex] =
        useState(null);

    const [searchFoundIndex, setSearchFoundIndex] =
        useState(null);

    /* =========================
      BINARY SEARCH
    ========================= */

    const [binaryLow, setBinaryLow] =
        useState(null);

    const [binaryMid, setBinaryMid] =
        useState(null);

    const [binaryHigh, setBinaryHigh] =
        useState(null);

    const [binaryFoundIndex, setBinaryFoundIndex] =
        useState(null);

     /* =========================
       PREFIX SUM
    ========================= */

    const [prefixArray, setPrefixArray] =
    useState([]);

    const [prefixActiveIndex, setPrefixActiveIndex] =
    useState(null);


    /* =========================
       STACK
    ========================= */

    const [stack, setStack] = useState([]);


    /* =========================
       QUEUE
    ========================= */

    const [queue, setQueue] = useState([]);


    /* =========================
       LINKED LIST
    ========================= */

    const [linkedList, setLinkedList] = useState([]);


    /* =========================
       TREE / BST
    ========================= */

    const [treeRoot, setTreeRoot] = useState(bst.root);

    const [traversal, setTraversal] = useState("inorder");

    const [treeTarget, setTreeTarget] = useState(12);


    /* =========================
       HEAP
    ========================= */

    const [heap, setHeap] = useState([]);

    const [visualizationMode, setVisualizationMode] =
        useState("tree");

    const [heapType, setHeapType] =
        useState("min");

    const [heapHighlighted, setHeapHighlighted] =
        useState([]);

    const [heapStats, setHeapStats] = useState({
        steps: 0,
        comparisons: 0,
        swaps: 0,
        insertions: 0,
        extractions: 0
    });


    /* =========================
       GRAPH
    ========================= */

    const [graphAlgorithm, setGraphAlgorithm] =
        useState("bfs");

    const [graphVisited, setGraphVisited] =
        useState([]);

    const [graphActiveVertex, setGraphActiveVertex] =
        useState(null);

    const [graphStats, setGraphStats] = useState({
        steps: 0,
        comparisons: 0,
        visited: 0,
        traversalOrder: []
    });


    /* =========================
       GREEDY
    ========================= */

    const [greedyAlgorithm, setGreedyAlgorithm] =
        useState("cookies");

    const [greedyStats, setGreedyStats] = useState({
        steps: 0,
        result: null,
        comparisons: 0
    });



    /* =========================
       DYNAMIC PROGRAMMING
    ========================= */

    const [dpAlgorithm, setDpAlgorithm] =
        useState("climbingStairs");

    const [dpTable, setDpTable] =
        useState([]);

    const [dpActiveIndex, setDpActiveIndex] =
        useState(null);

    const [dpPreviousIndexes, setDpPreviousIndexes] =
        useState([]);

    const [dpStats, setDpStats] = useState({
        steps: 0,
        comparisons: 0,
        result: null
    });


    /* =========================
       OPERATIONS
    ========================= */

    const treeOperations = createTreeOperations(
        traversal,
        treeTarget
    );

    const heapOperations =
        createHeapOperations(heapType);

    const graphData =
        createGraphData(graphAlgorithm);

    const greedyOperations =
        createGreedyOperations(greedyAlgorithm);

    const dpOperations =
        createDPOperations(dpAlgorithm);

    const sortingOperations =
    createSortingOperations(
        sortingAlgorithm,
        initialSortingArray
    );

    const stackOperations =
    createStackOperations();

    const queueOperations =
    createQueueOperations();

    const linkedListOperations =
    createLinkedListOperations();

    const arrayTraversalOperations =
    arrayTraversal(array).steps;

    const linearSearchOperations =
    linearSearch(
        array,
        searchTarget
    ).steps;

    const binarySearchOperations =
    binarySearch(
        array,
        searchTarget
    ).steps;

    const prefixSumOperations =
    prefixSum(array).steps;

    /* =========================
       ACTIVE OPERATIONS
    ========================= */

    const operations =
        visualizationMode === "heap"
            ? heapOperations
            : visualizationMode === "graph"
                ? graphData.steps
                : visualizationMode === "greedy"
                    ? greedyOperations
                    : visualizationMode === "dp"
                        ? dpOperations
                        : visualizationMode === "sorting"
                            ? sortingOperations
                            : visualizationMode === "stack"
                                ? stackOperations
                                : visualizationMode === "queue"
                                    ? queueOperations
                                    : visualizationMode === "linkedList"
                                        ? linkedListOperations
                                        : visualizationMode === "arrayTraversal"
                                            ? arrayTraversalOperations
                                            : visualizationMode === "linearSearch"
                                                ? linearSearchOperations
                                                 : visualizationMode === "binarySearch"
                                                    ? binarySearchOperations
                                                    : visualizationMode === "prefixSum"
                                                        ? prefixSumOperations
                                                        : treeOperations;


    const currentOperation =
        currentStep >= 0 &&
        currentStep < operations.length
            ? operations[currentStep]
            : null;


    /* =========================
       PLAY / PAUSE
    ========================= */

    const handlePlay = () => {

        if (currentStep >= operations.length) {
            return;
        }

        setIsPlaying(true);
    };


    const handlePause = () => {
        setIsPlaying(false);
    };


    /* =========================
       NEXT STEP
    ========================= */

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


        /* GENERAL RESULTS */

        setVisualArray(result.array);
        setSortedIndexes(result.sortedIndexes);
        setCurrentVisitIndex(result.currentVisitIndex);
        setFoundIndex(result.foundIndex);
        setStack(result.stack);
        setQueue(result.queue);
        setLinkedList(result.linkedList);
        setTreeRoot(result.treeRoot);


        /* HEAP */

        setHeap(result.heap);

        setHeapHighlighted(
            result.heapHighlighted
        );




        /* GRAPH */

        setGraphVisited(
            result.graphVisited
        );

        setGraphActiveVertex(
            result.graphActiveVertex
        );


        /* HEAP STATS */

        if (visualizationMode === "heap") {

            setHeapStats(prev => ({
                ...prev,

                steps: prev.steps + 1,

                comparisons:
                    prev.comparisons +
                    (
                        currentOperation.type === "compare"
                            ? 1
                            : 0
                    ),

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
                    (
                        currentOperation.type === "insert"
                            ? 1
                            : 0
                    ),

                extractions:
                    prev.extractions +
                    (
                        currentOperation.type === "extract"
                            ? 1
                            : 0
                    )
            }));
        }


        /* ARRAY TRAVERSAL */

        if (visualizationMode === "arrayTraversal") {

            if (currentOperation.type === "arrayVisit") {

                setVisualArray([
                    ...currentOperation.array
                ]);

                setArrayActiveIndex(
                    currentOperation.index
                );
            }

            if (currentOperation.type === "arrayComplete") {

                setVisualArray([
                    ...currentOperation.array
                ]);

                setArrayActiveIndex(null);
            }
        }

        /* =========================
        LINEAR SEARCH
        ========================= */

        if (visualizationMode === "linearSearch") {

            if (currentOperation.type === "searchCompare") {

                setVisualArray([
                    ...currentOperation.array
                ]);

                setSearchActiveIndex(
                    currentOperation.index
                );

                setSearchFoundIndex(null);
            }

            if (currentOperation.type === "searchFound") {

                setSearchActiveIndex(
                    currentOperation.index
                );

                setSearchFoundIndex(
                    currentOperation.index
                );
            }

            if (currentOperation.type === "searchNotFound") {

                setSearchActiveIndex(null);
                setSearchFoundIndex(null);
            }
        }

        /* =========================
        BINARY SEARCH
        ========================= */

        if (visualizationMode === "binarySearch") {

            if (
                currentOperation.type ===
                "binaryCompare"
            ) {

                setVisualArray([
                    ...currentOperation.array
                ]);

                setBinaryLow(
                    currentOperation.low
                );

                setBinaryMid(
                    currentOperation.mid
                );

                setBinaryHigh(
                    currentOperation.high
                );

                setBinaryFoundIndex(null);
            }


            if (
                currentOperation.type ===
                "binaryFound"
            ) {

                setBinaryLow(
                    currentOperation.low
                );

                setBinaryMid(
                    currentOperation.mid
                );

                setBinaryHigh(
                    currentOperation.high
                );

                setBinaryFoundIndex(
                    currentOperation.mid
                );
            }


            if (
                currentOperation.type ===
                "binaryNotFound"
            ) {

                setBinaryLow(
                    currentOperation.low
                );

                setBinaryMid(null);

                setBinaryHigh(
                    currentOperation.high
                );

                setBinaryFoundIndex(null);
            }
        }

        /* =========================
        PREFIX SUM
        ========================= */

        if (visualizationMode === "prefixSum") {

            if (
                currentOperation.type ===
                "prefixSum"
            ) {

                setPrefixArray([
                    ...currentOperation.prefix
                ]);

                setPrefixActiveIndex(
                    currentOperation.index
                );
            }

            if (
                currentOperation.type ===
                "prefixComplete"
            ) {

                setPrefixArray([
                    ...currentOperation.prefix
                ]);

                setPrefixActiveIndex(null);
            }
        }


        /* GRAPH STATS */

        if (visualizationMode === "graph") {

            setGraphStats(prev => ({
                ...prev,

                steps: prev.steps + 1,

                comparisons:
                    prev.comparisons +
                    (
                        currentOperation.type === "graphCompare"
                            ? 1
                            : 0
                    ),

                visited:
                    result.graphVisited.length,

                traversalOrder:
                    currentOperation.order ||
                    prev.traversalOrder
            }));
        }


        /* GREEDY STATS */

        if (visualizationMode === "greedy") {

            setGreedyStats(prev => ({
                ...prev,

                steps: prev.steps + 1,

                comparisons:
                    prev.comparisons +
                    (
                        currentOperation.type === "compare"
                            ? 1
                            : 0
                    ),

                result:
                    currentOperation.satisfied ??
                    currentOperation.profit ??
                    currentOperation.jumps ??
                    prev.result
            }));
        }
        

        

       /* SORTING */

        if (visualizationMode === "sorting") {

            if (currentOperation.array) {
                setSortingArray([
                    ...currentOperation.array
                ]);
            }

            if (
                currentOperation.type === "sortingSelectMin"
            ) {
                setSortingHighlighted([
                    currentOperation.index
                ]);
            } else {
                setSortingHighlighted(
                    currentOperation.indices || []
                );
            }

            setSortingPivotIndex(
                currentOperation.pivotIndex ?? null
            );

            if (
                currentOperation.type === "sortingSorted"
            ) {
                setSortedIndexes(prev => [
                    ...new Set([
                        ...prev,
                        currentOperation.index
                    ])
                ]);
            }

            if (
                currentOperation.type === "sortingComplete"
            ) {
                setSortingArray([
                    ...currentOperation.array
                ]);

                setSortingHighlighted([]);

                setSortingPivotIndex(null);

                setSortedIndexes(
                    currentOperation.sortedIndexes || []
                );
            }
        }

        /* DP */

        if (visualizationMode === "dp") {

            if (currentOperation.dp) {
                setDpTable([
                    ...currentOperation.dp
                ]);
            }

            if (
                currentOperation.index !== undefined
            ) {
                setDpActiveIndex(
                    currentOperation.index
                );
            }

            if (
                currentOperation.previous !== undefined
            ) {
                setDpPreviousIndexes([
                    ...currentOperation.previous
                ]);
            }

            if (
                currentOperation.previousIndex !== undefined
            ) {
                setDpPreviousIndexes([
                    currentOperation.previousIndex
                ]);
            }

            setDpStats(prev => ({
                ...prev,

                steps: prev.steps + 1,

                comparisons:
                    prev.comparisons +
                    (
                        currentOperation.type === "dpCompare"
                            ? 1
                            : 0
                    ),

                /*
                 * Only the final DP result should
                 * become the displayed result.
                 */
                result:
                    currentOperation.type === "dpComplete"
                        ? currentOperation.result
                        : prev.result
            }));
        }


        setCurrentStep(
            currentStep + 1
        );
    };


    /* =========================
       AUTO PLAY
    ========================= */

    useEffect(() => {

        if (!isPlaying) {
            return;
        }

        const timer = setTimeout(() => {
            handleNextStep();
        }, speed);

        return () => clearTimeout(timer);

    }, [
        isPlaying,
        currentStep,
        speed
    ]);


    /* =========================
       RESET
    ========================= */
    const resetSortingState = () => {

    setSortingArray([
        5,
        2,
        8,
        1,
        6
    ]);

    setSortingHighlighted([]);

    setSortingPivotIndex(null);

    setSortedIndexes([]);
};
//RESET

    const handleSearchTargetChange = (value) => {

    setSearchTarget(value);

    setCurrentStep(-1);

    setIsPlaying(false);

    setSearchActiveIndex(null);

    setSearchFoundIndex(null);

    


};

    const handleReset = () => {

        setCurrentStep(-1);

        setVisualArray(array);

        setSortedIndexes([]);

        setCurrentVisitIndex(null);

        setFoundIndex(null);

        setBinaryLow(null);
        setBinaryMid(null);
        setBinaryHigh(null);
        setBinaryFoundIndex(null);

        setPrefixArray([]);
        setPrefixActiveIndex(null);

        setIsPlaying(false);

        setStack([]);

        setQueue([]);

        setLinkedList([]);

        setTreeRoot(
            createBST().root
        );

        setArrayActiveIndex(null);

        setSearchActiveIndex(null);
        setSearchFoundIndex(null);


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


        setGreedyStats({
            steps: 0,
            result: null,
            comparisons: 0
        });


        setDpTable([]);

        setDpActiveIndex(null);

        setDpPreviousIndexes([]);

        setDpStats({
            steps: 0,
            comparisons: 0,
            result: null
        });

        /* Sorting */
        resetSortingState();
    };


    /* =========================
       VISUALIZATION CHANGE
    ========================= */

    const handleVisualizationChange = (value) => {

        setVisualizationMode(value);

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

        setArrayActiveIndex(null);

        setSearchActiveIndex(null);
        setSearchFoundIndex(null);

        setBinaryLow(null);
        setBinaryMid(null);
        setBinaryHigh(null);
        setBinaryFoundIndex(null);

        setPrefixArray([]);
        setPrefixActiveIndex(null);

        setGraphVisited([]);

        setGraphActiveVertex(null);

        setGraphStats({
            steps: 0,
            comparisons: 0,
            visited: 0,
            traversalOrder: []
        });


        setGreedyStats({
            steps: 0,
            result: null,
            comparisons: 0
        });


        setDpTable([]);

        setDpActiveIndex(null);

        setDpPreviousIndexes([]);

        setDpStats({
            steps: 0,
            comparisons: 0,
            result: null
        });

        resetSortingState();
    };


    /* =========================
       RENDER
    ========================= */

    return (
        <AppLayout
            visualizationMode={visualizationMode}
            setVisualizationMode={setVisualizationMode}
            handleVisualizationChange={handleVisualizationChange}
            traversal={traversal}
            setTraversal={setTraversal}
            graphAlgorithm={graphAlgorithm}
            setGraphAlgorithm={setGraphAlgorithm}
            greedyAlgorithm={greedyAlgorithm}
            setGreedyAlgorithm={setGreedyAlgorithm}
            dpAlgorithm={dpAlgorithm}
            setDpAlgorithm={setDpAlgorithm}
            sortingAlgorithm={sortingAlgorithm}
            setSortingAlgorithm={setSortingAlgorithm}

        >

            <div className="dashboard">

                <div className="dashboard-grid">

                    {/* =========================
                        MAIN CONTENT
                    ========================= */}

                    <main className="dashboard-main">

                        <AlgorithmHeader
                            visualizationMode={visualizationMode}
                            traversal={traversal}
                            sortingAlgorithm={sortingAlgorithm}
                            graphAlgorithm={graphAlgorithm}
                            greedyAlgorithm={greedyAlgorithm}
                            dpAlgorithm={dpAlgorithm}
                        />


                        <ControlPanel
                            visualizationMode={visualizationMode}
                            traversal={traversal}
                            sortingAlgorithm={sortingAlgorithm}
                            setSortingAlgorithm={setSortingAlgorithm}
                            searchTarget={searchTarget}
                            setSearchTarget={handleSearchTargetChange}
                            setTraversal={setTraversal}
                            treeTarget={treeTarget}
                            setTreeTarget={setTreeTarget}
                            heapType={heapType}
                            setHeapType={setHeapType}
                            graphAlgorithm={graphAlgorithm}
                            setGraphAlgorithm={setGraphAlgorithm}
                            greedyAlgorithm={greedyAlgorithm}
                            setGreedyAlgorithm={setGreedyAlgorithm}
                            dpAlgorithm={dpAlgorithm}
                            setDpAlgorithm={setDpAlgorithm}
                            handlePlay={handlePlay}
                            handlePause={handlePause}
                            handleNextStep={handleNextStep}
                            handleReset={handleReset}
                            isPlaying={isPlaying}
                            speed={speed}
                            setSpeed={setSpeed}
                        />


                        <div className="visualization-card">

                        {/* ARRAY */}

                        {visualizationMode === "arrayTraversal" && (
                            <ArrayTraversalVisualizer
                                array={visualArray}
                                activeIndex={arrayActiveIndex}
                            />
                        )}


                        {/* LINEAR SEARCH */}

                        {visualizationMode === "linearSearch" && (
                            <ArrayTraversalVisualizer
                                array={visualArray}
                                activeIndex={searchActiveIndex}
                                foundIndex={searchFoundIndex}
                            />
                        )}

                        {/* BINARY SEARCH*/}

                        {visualizationMode ===
                            "binarySearch" && (

                            <BinarySearchVisualizer
                                array={visualArray}
                                low={binaryLow}
                                mid={binaryMid}
                                high={binaryHigh}
                                foundIndex={binaryFoundIndex}
                            />

                        )}

                        {/* PREFIX SUM */}

                        {visualizationMode === "prefixSum" && (

                        <PrefixSumVisualizer
                            array={array}
                            prefix={prefixArray}
                            activeIndex={prefixActiveIndex}
                        />

                        )}

                            {/* HEAP */}

                            {visualizationMode === "heap" && (
                                <HeapVisualizer
                                    heap={heap}
                                    highlighted={heapHighlighted}
                                />
                            )}

                            {/* SORTING */}

                            {visualizationMode === "sorting" && (
                            <SortingVisualizer
                                array={sortingArray}
                                highlighted={sortingHighlighted}
                                sortedIndexes={sortedIndexes}
                                pivotIndex={sortingPivotIndex}
                            />
                        )}


                            {/* GRAPH */}

                            {visualizationMode === "graph" && (
                                <GraphVisualizer
                                    vertices={graphData.vertices}
                                    graph={graphData.graph}
                                    visited={graphVisited}
                                    activeVertex={graphActiveVertex}
                                />
                            )}

                            {/* STACK */}

                            {visualizationMode === "stack" && (
                                <StackVisualizer
                                    stack={stack}
                                />
                            )}


                            {/* GREEDY */}

                            {visualizationMode === "greedy" && (
                                <GreedyVisualizer
                                    algorithm={greedyAlgorithm}
                                    operation={currentOperation}
                                />
                            )}


                            {/* DP */}

                            {visualizationMode === "dp" && (
                                <DPVisualizer
                                    dp={dpTable}
                                    activeIndex={dpActiveIndex}
                                    previousIndexes={dpPreviousIndexes}
                                    nums={
                                        currentOperation?.nums || []
                                    }
                                    operationType={
                                        currentOperation?.type || null
                                    }
                                />
                            )}

                            {/* QUEUE */}

                            {visualizationMode === "queue" && (
                                <QueueVisualizer
                                    queue={queue}
                                />
                            )}

                             {/* LINKED LIST */}
                            {visualizationMode === "linkedList" && (
                                <LinkedListVisualizer
                                    linkedList={linkedList}
                                />
                            )}

                            {/* TREE */}

                            {visualizationMode === "tree" && (
                                <>
                                   

                                    <TreeVisualizer
                                        root={treeRoot}
                                        currentVisitIndex={currentVisitIndex}
                                        foundIndex={foundIndex}
                                    />

                                    <LinkedListVisualizer
                                        linkedList={linkedList}
                                    />
                                </>
                            )}

                        </div>


                        {/* STEP INDICATOR */}

                        <div className="step-indicator">

                            <span>
                                Current Step:{" "}
                                <strong>
                                    {currentStep >= 0
                                        ? currentStep + 1
                                        : 0}
                                </strong>
                            </span>

                            <span>
                                {operations.length > 0
                                    ? `${Math.min(
                                        Math.max(currentStep + 1, 0),
                                        operations.length
                                    )} / ${operations.length}`
                                    : "0 / 0"}
                            </span>

                        </div>


                        {/* CURRENT OPERATION */}

                        <OperationPanel
                            currentOperation={currentOperation}
                        />

                    </main>


                    {/* =========================
                        RIGHT PANEL
                    ========================= */}

                    <aside>

                        <AlgorithmInfo
                            visualizationMode={visualizationMode}
                            sortingAlgorithm={sortingAlgorithm}
                            graphAlgorithm={graphAlgorithm}
                            greedyAlgorithm={greedyAlgorithm}
                            dpAlgorithm={dpAlgorithm}
                            heapType={heapType}
                        />

                        <StepLog
                            operations={operations}
                            currentStep={currentStep}
                        />

                    </aside>

                </div>

            </div>

        </AppLayout>
    );
}

export default App;