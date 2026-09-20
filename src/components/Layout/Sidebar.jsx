function Sidebar({
    visualizationMode,
    handleVisualizationChange,

    traversal,
    setTraversal,

    sortingAlgorithm,
    setSortingAlgorithm,

    graphAlgorithm,
    setGraphAlgorithm,

    greedyAlgorithm,
    setGreedyAlgorithm,

    dpAlgorithm,
    setDpAlgorithm
}) {

    const changeMode = (mode) => {
        handleVisualizationChange(mode);
    };

    return (
        <aside className="sidebar">

            {/* =========================
               ARRAYS
            ========================= */}

            <div className="sidebar-section">

                <h3>ARRAYS</h3>

                <button
                    className="sidebar-item"
                    onClick={() => changeMode("tree")}
                >
                    <span>▦</span>
                    Array Traversal
                </button>

                <button
                    className="sidebar-item"
                    onClick={() => changeMode("tree")}
                >
                    <span>◷</span>
                    Linear Search
                </button>

                <button
                    className="sidebar-item"
                    onClick={() => changeMode("tree")}
                >
                    <span>◉</span>
                    Binary Search
                </button>

                <button
                    className="sidebar-item"
                    onClick={() => changeMode("tree")}
                >
                    <span>⌁</span>
                    Prefix Sum
                </button>

            </div>


            {/* =========================
               SORTING
            ========================= */}

            <div className="sidebar-section">

                <h3>SORTING</h3>

                {/* BUBBLE SORT */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "sorting" &&
                        sortingAlgorithm === "bubble"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setSortingAlgorithm("bubble");
                        changeMode("sorting");
                    }}
                >
                    <span>●</span>
                    Bubble Sort
                </button>


                {/* SELECTION SORT */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "sorting" &&
                        sortingAlgorithm === "selection"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setSortingAlgorithm("selection");
                        changeMode("sorting");
                    }}
                >
                    <span>◉</span>
                    Selection Sort
                </button>


                {/* INSERTION SORT */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "sorting" &&
                        sortingAlgorithm === "insertion"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setSortingAlgorithm("insertion");
                        changeMode("sorting");
                    }}
                >
                    <span>⇄</span>
                    Insertion Sort
                </button>


                {/* MERGE SORT */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "sorting" &&
                        sortingAlgorithm === "merge"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setSortingAlgorithm("merge");
                        changeMode("sorting");
                    }}
                >
                    <span>⌁</span>
                    Merge Sort
                </button>


                {/* QUICK SORT */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "sorting" &&
                        sortingAlgorithm === "quick"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setSortingAlgorithm("quick");
                        changeMode("sorting");
                    }}
                >
                    <span>▥</span>
                    Quick Sort
                </button>

            </div>


            {/* =========================
               DATA STRUCTURES
            ========================= */}

            <div className="sidebar-section">

                <h3>DATA STRUCTURES</h3>


                {/* TREE */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "tree"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setTraversal("inorder");
                        changeMode("tree");
                    }}
                >
                    <span>♧</span>
                    Binary Tree
                </button>


                {/* TREE TRAVERSALS */}

                <div className="sidebar-subsection">

                    <button
                        className={`sidebar-item sidebar-subitem ${
                            visualizationMode === "tree" &&
                            traversal === "inorder"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => {
                            setTraversal("inorder");
                            changeMode("tree");
                        }}
                    >
                        <span>↳</span>
                        Inorder
                    </button>


                    <button
                        className={`sidebar-item sidebar-subitem ${
                            visualizationMode === "tree" &&
                            traversal === "preorder"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => {
                            setTraversal("preorder");
                            changeMode("tree");
                        }}
                    >
                        <span>↳</span>
                        Preorder
                    </button>


                    <button
                        className={`sidebar-item sidebar-subitem ${
                            visualizationMode === "tree" &&
                            traversal === "postorder"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => {
                            setTraversal("postorder");
                            changeMode("tree");
                        }}
                    >
                        <span>↳</span>
                        Postorder
                    </button>


                    <button
                        className={`sidebar-item sidebar-subitem ${
                            visualizationMode === "tree" &&
                            traversal === "levelorder"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => {
                            setTraversal("levelorder");
                            changeMode("tree");
                        }}
                    >
                        <span>↳</span>
                        Level Order
                    </button>

                </div>


                {/* STACK */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "stack"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => changeMode("stack")}
                >
                    <span>▤</span>
                    Stack
                </button>

                {/* QUEUE */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "queue"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => changeMode("queue")}
                >
                    <span>▤</span>
                    Queue
                </button>


                {/* LINKED LIST */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "linkedList"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => changeMode("linkedList")}
                >
                    <span>↔</span>
                    Linked List
                </button>


                {/* BINARY SEARCH TREE */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "tree" &&
                        traversal === "search"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setTraversal("search");
                        changeMode("tree");
                    }}
                >
                    <span>♙</span>
                    Binary Search Tree
                </button>


                {/* HEAP */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "heap"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => changeMode("heap")}
                >
                    <span>♟</span>
                    Heap
                </button>


                {/* GRAPH */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "graph"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => changeMode("graph")}
                >
                    <span>♧</span>
                    Graph
                </button>

            </div>


            {/* =========================
               ALGORITHMS
            ========================= */}

            <div className="sidebar-section">

                <h3>ALGORITHMS</h3>


                {/* BFS */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "graph" &&
                        graphAlgorithm === "bfs"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setGraphAlgorithm("bfs");
                        changeMode("graph");
                    }}
                >
                    <span>◉</span>
                    BFS
                </button>


                {/* DFS */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "graph" &&
                        graphAlgorithm === "dfs"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setGraphAlgorithm("dfs");
                        changeMode("graph");
                    }}
                >
                    <span>⌘</span>
                    DFS
                </button>


                {/* GREEDY */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "greedy"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setGreedyAlgorithm("cookies");
                        changeMode("greedy");
                    }}
                >
                    <span>✥</span>
                    Greedy
                </button>


                {/* DYNAMIC PROGRAMMING */}

                <button
                    className={`sidebar-item ${
                        visualizationMode === "dp"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => {
                        setDpAlgorithm("climbingStairs");
                        changeMode("dp");
                    }}
                >
                    <span>⌘</span>
                    Dynamic Programming
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;