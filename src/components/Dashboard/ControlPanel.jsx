function ControlPanel({
    visualizationMode,

    traversal,
    setTraversal,

    treeTarget,
    setTreeTarget,

    heapType,
    setHeapType,

    graphAlgorithm,
    setGraphAlgorithm,

    greedyAlgorithm,
    setGreedyAlgorithm,

    dpAlgorithm,
    setDpAlgorithm,

    handlePlay,
    handlePause,
    handleNextStep,
    handleReset,

    isPlaying,
    speed,
    setSpeed
}) {
    return (
        <div className="control-panel">

            {/* =========================
               PLAYBACK CONTROLS
            ========================= */}

            <div className="control-buttons">

                <button
                    className="control-button primary"
                    onClick={handlePlay}
                    disabled={isPlaying}
                >
                    ▶ Play
                </button>

                <button
                    className="control-button"
                    onClick={handlePause}
                >
                    ❚❚ Pause
                </button>

                <button
                    className="control-button"
                    onClick={handleNextStep}
                >
                    ▷| Next Step
                </button>

                <button
                    className="control-button"
                    onClick={handleReset}
                >
                    ↻ Reset
                </button>

            </div>


            {/* =========================
               SPEED
            ========================= */}

            <div className="speed-control">

                <span>Speed</span>

                <input
                    type="range"
                    min="100"
                    max="1500"
                    step="100"
                    value={1600 - speed}
                    onChange={(e) =>
                        setSpeed(
                            1600 - Number(e.target.value)
                        )
                    }
                />

                <div className="speed-labels">
                    <span>Slow</span>
                    <span>Fast</span>
                </div>

            </div>


            {/* =========================
               TREE / BST
            ========================= */}

            {visualizationMode === "tree" && (

                <div className="tree-controls">

                    <div className="algorithm-select">

                        <label>
                            Traversal
                        </label>

                        <select
                            value={traversal}
                            onChange={(e) => {

                                setTraversal(
                                    e.target.value
                                );

                                handleReset();

                            }}
                        >

                            <option value="inorder">
                                Inorder
                            </option>

                            <option value="preorder">
                                Preorder
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

                    </div>


                    {traversal === "search" && (

                        <div className="algorithm-select">

                            <label>
                                Target
                            </label>

                            <input
                                type="number"
                                value={treeTarget}
                                onChange={(e) => {

                                    setTreeTarget(
                                        Number(
                                            e.target.value
                                        )
                                    );

                                    handleReset();

                                }}
                            />

                        </div>

                    )}

                </div>

            )}


            {/* =========================
               HEAP
            ========================= */}

            {visualizationMode === "heap" && (

                <div className="algorithm-select">

                    <label>
                        Heap Type
                    </label>

                    <select
                        value={heapType}
                        onChange={(e) => {

                            setHeapType(
                                e.target.value
                            );

                            handleReset();

                        }}
                    >

                        <option value="min">
                            Min Heap
                        </option>

                        <option value="max">
                            Max Heap
                        </option>

                    </select>

                </div>

            )}


            {/* =========================
               GRAPH
            ========================= */}

            {visualizationMode === "graph" && (

                <div className="algorithm-select">

                    <label>
                        Traversal
                    </label>

                    <select
                        value={graphAlgorithm}
                        onChange={(e) => {

                            setGraphAlgorithm(
                                e.target.value
                            );

                            handleReset();

                        }}
                    >

                        <option value="bfs">
                            BFS
                        </option>

                        <option value="dfs">
                            DFS
                        </option>

                    </select>

                </div>

            )}


            {/* =========================
               GREEDY
            ========================= */}

            {visualizationMode === "greedy" && (

                <div className="algorithm-select">

                    <label>
                        Algorithm
                    </label>

                    <select
                        value={greedyAlgorithm}
                        onChange={(e) => {

                            setGreedyAlgorithm(
                                e.target.value
                            );

                            handleReset();

                        }}
                    >

                        <option value="cookies">
                            Assign Cookies
                        </option>

                        <option value="stock">
                            Stock Profit
                        </option>

                        <option value="jumpGame">
                            Jump Game
                        </option>

                        <option value="jumpGameII">
                            Jump Game II
                        </option>

                    </select>

                </div>

            )}


            {/* =========================
               DYNAMIC PROGRAMMING
            ========================= */}

            {visualizationMode === "dp" && (

                <div className="algorithm-select">

                    <label>
                        Algorithm
                    </label>

                    <select
                        value={dpAlgorithm}
                        onChange={(e) => {

                            setDpAlgorithm(
                                e.target.value
                            );

                            handleReset();

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

                        <option value="longestIncreasingSubsequence">
                            Longest Increasing Subsequence
                        </option>

                    </select>

                </div>

            )}

        </div>
    );
}

export default ControlPanel;