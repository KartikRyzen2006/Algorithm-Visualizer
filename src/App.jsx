import { useState, useEffect } from "react";

import ArrayBar from "./components/ArrayBar/ArrayBar";

import visualizationEngine from "./engine/visualizationEngine";

import LinkedListVisualizer from "./components/LinkedListVisualizer/LinkedListVisualizer";
import TreeVisualizer from "./components/TreeVisualizer/TreeVisualizer";
import HeapVisualizer from "./components/HeapVisualizer/HeapVisualizer";
import GraphVisualizer from "./components/GraphVisualizer/GraphVisualizer";
import GreedyVisualizer from "./components/GreedyVisualizer/GreedyVisualizer";
import DPVisualizer from "./components/DPVisualizer/DPVisualizer.jsx";

import BST from "./algorithms/dataStructures/bst.js";
import createTreeOperations from "./algorithms/dataStructures/treeOperations.js";

import MinHeap from "./algorithms/heap/minHeap";
import MaxHeap from "./algorithms/heap/maxHeap";

import Graph from "./algorithms/graph/Graph";
import bfs from "./algorithms/graph/bfs";
import dfs from "./algorithms/graph/dfs";

import {
    assignCookies,
    stockProfit,
    jumpGame,
    jumpGameII
} from "./algorithms/greedy";

import climbingStairs from "./algorithms/dynamicProgramming/climbingStairs";
import houseRobber from "./algorithms/dynamicProgramming/houseRobber";
import coinChange from "./algorithms/dynamicProgramming/coinChange";
import longestIncreasingSubsequence from "./algorithms/dynamicProgramming/longestIncreasingSubsequence";


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

    if (algorithm === "lis") {
        return longestIncreasingSubsequence(
            [10, 9, 2, 5, 3, 7, 101, 18]
        ).steps;
    }

    return [];
};


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

    const [sortedIndexes, setSortedIndexes] = useState([]);

    const [isPlaying, setIsPlaying] = useState(false);

    const [speed, setSpeed] = useState(500);

    const [currentVisitIndex, setCurrentVisitIndex] = useState(null);

    const [foundIndex, setFoundIndex] = useState(null);


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
                        : treeOperations;


    const currentOperation =
        currentStep >= 0 &&
        currentStep < operations.length
            ? operations[currentStep]
            : null;


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


        /* =========================
           GENERAL RESULTS
        ========================= */

        setVisualArray(result.array);

        setSortedIndexes(result.sortedIndexes);

        setCurrentVisitIndex(
            result.currentVisitIndex
        );

        setFoundIndex(
            result.foundIndex
        );

        setStack(result.stack);

        setQueue(result.queue);

        setLinkedList(result.linkedList);

        setTreeRoot(result.treeRoot);


        /* =========================
           HEAP RESULTS
        ========================= */

        setHeap(result.heap);

        setHeapHighlighted(
            result.heapHighlighted
        );


        /* =========================
           GRAPH RESULTS
        ========================= */

        setGraphVisited(
            result.graphVisited
        );

        setGraphActiveVertex(
            result.graphActiveVertex
        );


        /* =========================
           HEAP STATS
        ========================= */

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


        /* =========================
           GRAPH STATS
        ========================= */

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


        /* =========================
           GREEDY STATS
        ========================= */

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


        /* =========================
           DP RESULTS + STATS
        ========================= */

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

                result:
                    currentOperation.result ??
                    currentOperation.value ??
                    prev.result
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

    const handleReset = () => {

        setCurrentStep(-1);

        setVisualArray(array);

        setSortedIndexes([]);

        setCurrentVisitIndex(null);

        setFoundIndex(null);

        setIsPlaying(false);


        /* Stack */

        setStack([]);


        /* Queue */

        setQueue([]);


        /* Linked List */

        setLinkedList([]);


        /* Tree */

        setTreeRoot(
            createBST().root
        );


        /* Heap */

        setHeap([]);

        setHeapHighlighted([]);

        setHeapStats({
            steps: 0,
            comparisons: 0,
            swaps: 0,
            insertions: 0,
            extractions: 0
        });


        /* Graph */

        setGraphVisited([]);

        setGraphActiveVertex(null);

        setGraphStats({
            steps: 0,
            comparisons: 0,
            visited: 0,
            traversalOrder: []
        });


        /* Greedy */

        setGreedyStats({
            steps: 0,
            result: null,
            comparisons: 0
        });


        /* DP */

        setDpTable([]);

        setDpActiveIndex(null);

        setDpPreviousIndexes([]);

        setDpStats({
            steps: 0,
            comparisons: 0,
            result: null
        });
    };


    /* =========================
       VISUALIZATION CHANGE
    ========================= */

    const handleVisualizationChange = (value) => {

        setVisualizationMode(value);

        setCurrentStep(-1);

        setIsPlaying(false);


        /* Heap */

        setHeap([]);

        setHeapHighlighted([]);

        setHeapStats({
            steps: 0,
            comparisons: 0,
            swaps: 0,
            insertions: 0,
            extractions: 0
        });


        /* Graph */

        setGraphVisited([]);

        setGraphActiveVertex(null);

        setGraphStats({
            steps: 0,
            comparisons: 0,
            visited: 0,
            traversalOrder: []
        });


        /* Greedy */

        setGreedyStats({
            steps: 0,
            result: null,
            comparisons: 0
        });


        /* DP */

        setDpTable([]);

        setDpActiveIndex(null);

        setDpPreviousIndexes([]);

        setDpStats({
            steps: 0,
            comparisons: 0,
            result: null
        });
    };


    return (
        <div>

            <h1>
                Algorithm Visualizer
            </h1>


            {/* =========================
                ARRAY VISUALIZATION
            ========================= */}

            {visualizationMode === "tree" && (
                <div className="array-container">

                    {visualArray.map(
                        (value, index) => (

                            <ArrayBar
                                key={index}
                                value={value}
                                index={index}

                                isActive={
                                    currentOperation &&
                                    (
                                        index ===
                                        currentOperation.index1 ||

                                        index ===
                                        currentOperation.index2
                                    )
                                }

                                operationType={
                                    currentOperation?.type
                                }

                                isSorted={
                                    sortedIndexes.includes(
                                        index
                                    )
                                }

                                currentVisitIndex={
                                    currentVisitIndex
                                }

                                foundIndex={
                                    foundIndex
                                }
                            />

                        )
                    )}

                </div>
            )}


            {/* =========================
                CONTROLS
            ========================= */}

            <div className="visualizer-controls">

                <button
                    onClick={handleNextStep}
                >
                    Next Step
                </button>


                <button
                    onClick={() =>
                        setIsPlaying(!isPlaying)
                    }
                >
                    {
                        isPlaying
                            ? "Pause"
                            : "Play"
                    }
                </button>


                <label>

                    Speed:

                    <select
                        value={speed}
                        onChange={(e) =>
                            setSpeed(
                                Number(e.target.value)
                            )
                        }
                    >

                        <option value={1000}>
                            Slow
                        </option>

                        <option value={500}>
                            Medium
                        </option>

                        <option value={100}>
                            Fast
                        </option>

                    </select>

                </label>


                <button
                    onClick={handleReset}
                >
                    Reset
                </button>

            </div>


            {/* =========================
                STACK
            ========================= */}

            {visualizationMode === "tree" && (
                <>
                    <h2>
                        Stack - TOP
                    </h2>

                    <div className="stack-container">

                        {stack.map(
                            (value, index) => (

                                <div
                                    className="stack-item"
                                    key={index}
                                >

                                    {value}

                                    {
                                        index ===
                                        stack.length - 1 && (
                                            <span className="top-label">
                                                ← TOP
                                            </span>
                                        )
                                    }

                                </div>

                            )
                        )}

                    </div>


                    {/* =========================
                        QUEUE
                    ========================= */}

                    <h2>
                        Queue
                    </h2>

                    <div className="queue-container">

                        <span className="queue-label">
                            FRONT →
                        </span>

                        {queue.map(
                            (value, index) => (

                                <div
                                    className="queue-item"
                                    key={index}
                                >
                                    {value}
                                </div>

                            )
                        )}

                        <span className="queue-label">
                            ← REAR
                        </span>

                    </div>


                    {/* =========================
                        LINKED LIST
                    ========================= */}

                    <h2>
                        Linked List
                    </h2>

                    <LinkedListVisualizer
                        linkedList={linkedList}
                    />

                </>
            )}


            {/* =========================
                VISUALIZATION SELECTOR
            ========================= */}

            <h2>
                Algorithm / Data Structure
            </h2>

            <label>

                Visualization:

                <select
                    value={visualizationMode}
                    onChange={(e) =>
                        handleVisualizationChange(
                            e.target.value
                        )
                    }
                >

                    <option value="tree">
                        Binary Tree / BST
                    </option>

                    <option value="heap">
                        Heap
                    </option>

                    <option value="graph">
                        Graph
                    </option>

                    <option value="greedy">
                        Greedy Algorithms
                    </option>

                    <option value="dp">
                        Dynamic Programming
                    </option>

                </select>

            </label>


            {/* =========================
                HEAP SELECTOR
            ========================= */}

            {visualizationMode === "heap" && (

                <label>

                    Heap Type:

                    <select
                        value={heapType}
                        onChange={(e) => {

                            setHeapType(
                                e.target.value
                            );

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

                        <option value="min">
                            Min Heap
                        </option>

                        <option value="max">
                            Max Heap
                        </option>

                    </select>

                </label>

            )}


            {/* =========================
                GRAPH SELECTOR
            ========================= */}

            {visualizationMode === "graph" && (

                <label>

                    Graph Algorithm:

                    <select
                        value={graphAlgorithm}
                        onChange={(e) => {

                            setGraphAlgorithm(
                                e.target.value
                            );

                            setCurrentStep(-1);

                            setIsPlaying(false);

                            setGraphVisited([]);

                            setGraphActiveVertex(null);

                            setGraphStats({
                                steps: 0,
                                comparisons: 0,
                                visited: 0,
                                traversalOrder: []
                            });
                        }}
                    >

                        <option value="bfs">
                            BFS
                        </option>

                        <option value="dfs">
                            DFS
                        </option>

                    </select>

                </label>

            )}


            {/* =========================
                GREEDY SELECTOR
            ========================= */}

            {visualizationMode === "greedy" && (

                <label>

                    Greedy Algorithm:

                    <select
                        value={greedyAlgorithm}
                        onChange={(e) => {

                            setGreedyAlgorithm(
                                e.target.value
                            );

                            setCurrentStep(-1);

                            setIsPlaying(false);

                            setGreedyStats({
                                steps: 0,
                                result: null,
                                comparisons: 0
                            });
                        }}
                    >

                        <option value="cookies">
                            Assign Cookies
                        </option>

                        <option value="stock">
                            Best Time to Buy and Sell Stock II
                        </option>

                        <option value="jumpGame">
                            Jump Game
                        </option>

                        <option value="jumpGameII">
                            Jump Game II
                        </option>

                    </select>

                </label>

            )}


            {/* =========================
                DP SELECTOR
            ========================= */}

            {visualizationMode === "dp" && (

                <label>

                    DP Algorithm:

                    <select
                        value={dpAlgorithm}
                        onChange={(e) => {

                            setDpAlgorithm(
                                e.target.value
                            );

                            setCurrentStep(-1);

                            setIsPlaying(false);

                            setDpTable([]);

                            setDpActiveIndex(null);

                            setDpPreviousIndexes([]);

                            setDpStats({
                                steps: 0,
                                comparisons: 0,
                                result: null
                            });
                        }}
                    >

                        <option value="climbingStairs">
                            Climbing Stairs
                        </option>

                        <option value="houseRobber">
                            House Robber
                        </option>

                        <option value="coinChange">
                            Coin Change
                        </option>

                        <option value="lis">
                            Longest Increasing Subsequence
                        </option>

                    </select>

                </label>

            )}


            {/* =========================
                BINARY TREE
            ========================= */}

            {visualizationMode === "tree" && (

                <>

                    <h2>
                        Binary Tree
                    </h2>

                    <label>

                        Traversal:

                        <select
                            value={traversal}
                            onChange={(e) => {

                                setTraversal(
                                    e.target.value
                                );

                                setCurrentStep(-1);

                                setCurrentVisitIndex(
                                    null
                                );

                                setFoundIndex(
                                    null
                                );

                                setIsPlaying(false);
                            }}
                        >

                            <option value="preorder">
                                Preorder
                            </option>

                            <option value="inorder">
                                Inorder
                            </option>

                            <option value="postorder">
                                Postorder
                            </option>

                            <option value="levelorder">
                                Level Order
                            </option>

                            <option value="search">
                                BST Search
                            </option>

                        </select>

                    </label>


                    {traversal === "search" && (

                        <label>

                            Target:

                            <input
                                type="number"
                                value={treeTarget}
                                onChange={(e) =>
                                    setTreeTarget(
                                        Number(
                                            e.target.value
                                        )
                                    )
                                }
                            />

                        </label>

                    )}


                    <TreeVisualizer
                        root={treeRoot}
                        currentVisitIndex={
                            currentVisitIndex
                        }
                        foundIndex={
                            foundIndex
                        }
                    />

                </>

            )}


            {/* =========================
                HEAP VISUALIZATION
            ========================= */}

            {visualizationMode === "heap" && (

                <>

                    <h2>
                        {
                            heapType === "min"
                                ? "Min Heap"
                                : "Max Heap"
                        }
                    </h2>


                    <HeapVisualizer
                        heap={heap}
                        highlighted={
                            heapHighlighted
                        }
                    />


                    <div className="heap-statistics">

                        <h3>
                            Heap Analysis
                        </h3>

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


            {/* =========================
                GRAPH VISUALIZATION
            ========================= */}

            {visualizationMode === "graph" && (

                <>

                    <h2>
                        {
                            graphAlgorithm === "bfs"
                                ? "Breadth First Search (BFS)"
                                : "Depth First Search (DFS)"
                        }
                    </h2>


                    <GraphVisualizer
                        vertices={
                            graphData.vertices
                        }
                        graph={
                            graphData.graph
                        }
                        visited={
                            graphVisited
                        }
                        activeVertex={
                            graphActiveVertex
                        }
                    />


                    <div className="graph-statistics">

                        <h3>
                            Graph Analysis
                        </h3>

                        <p>
                            Algorithm:{" "}
                            {
                                graphAlgorithm === "bfs"
                                    ? "BFS"
                                    : "DFS"
                            }
                        </p>

                        <p>
                            Steps: {graphStats.steps}
                        </p>

                        <p>
                            Nodes Visited:{" "}
                            {graphStats.visited}
                        </p>

                        <p>
                            Comparisons:{" "}
                            {graphStats.comparisons}
                        </p>

                        <p>
                            Traversal Order:{" "}
                            {
                                graphStats.traversalOrder.length > 0
                                    ? graphStats.traversalOrder.join(
                                        " → "
                                    )
                                    : "-"
                            }
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


            {/* =========================
                GREEDY VISUALIZATION
            ========================= */}

            {visualizationMode === "greedy" && (

                <>

                    <h2>

                        {
                            greedyAlgorithm === "cookies"
                                ? "Assign Cookies"

                                : greedyAlgorithm === "stock"
                                    ? "Best Time to Buy and Sell Stock II"

                                    : greedyAlgorithm === "jumpGame"
                                        ? "Jump Game"

                                        : "Jump Game II"
                        }

                    </h2>


                    <GreedyVisualizer
                        algorithm={
                            greedyAlgorithm
                        }
                        operation={
                            currentOperation
                        }
                    />


                    <div className="greedy-statistics">

                        <h3>
                            Greedy Analysis
                        </h3>

                        <p>
                            Steps:{" "}
                            {greedyStats.steps}
                        </p>

                        <p>
                            Comparisons:{" "}
                            {greedyStats.comparisons}
                        </p>

                        <p>
                            Result:{" "}
                            {greedyStats.result ?? "-"}
                        </p>

                        <p>
                            Time Complexity: O(n log n)
                        </p>

                        <p>
                            Space Complexity: O(n)
                        </p>

                    </div>

                </>

            )}


            {/* =========================
                DP VISUALIZATION
            ========================= */}

            {visualizationMode === "dp" && (

                <>

                    <h2>

                        {
                            dpAlgorithm === "climbingStairs"
                                ? "Climbing Stairs"

                                : dpAlgorithm === "houseRobber"
                                    ? "House Robber"

                                    : dpAlgorithm === "coinChange"
                                        ? "Coin Change"

                                        : "Longest Increasing Subsequence"
                        }

                    </h2>


                    <DPVisualizer
                        dp={dpTable}

                        activeIndex={
                            dpActiveIndex
                        }

                        previousIndexes={
                            dpPreviousIndexes
                        }

                        nums={
                            currentOperation?.nums ||
                            []
                        }

                        operationType={
                            currentOperation?.type
                        }
                    />


                    <div className="dp-statistics">

                        <h3>
                            DP Analysis
                        </h3>

                        <p>
                            Steps:{" "}
                            {dpStats.steps}
                        </p>

                        <p>
                            State Comparisons:{" "}
                            {dpStats.comparisons}
                        </p>

                        <p>
                            Result:{" "}
                            {dpStats.result ?? "-"}
                        </p>

                        <p>
                            Time Complexity:{" "}

                            {
                                dpAlgorithm === "lis"
                                    ? "O(n²)"

                                    : dpAlgorithm === "coinChange"
                                        ? "O(amount × coins)"

                                        : "O(n)"
                            }

                        </p>

                        <p>
                            Space Complexity: O(n)
                        </p>

                    </div>

                </>

            )}

        </div>
    );
}

export default App;