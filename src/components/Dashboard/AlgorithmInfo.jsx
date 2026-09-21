function AlgorithmInfo({
    visualizationMode,
    sortingAlgorithm,
    graphAlgorithm,
    greedyAlgorithm,
    dpAlgorithm,
    heapType
}) {

    const getComplexity = () => {

        /* =========================
           SORTING
        ========================= */

        if (visualizationMode === "sorting") {

            if (sortingAlgorithm === "bubble") {
                return {
                    time: "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
                    space: "O(1)"
                };
            }

            if (sortingAlgorithm === "selection") {
                return {
                    time: "Best: O(n²) | Avg: O(n²) | Worst: O(n²)",
                    space: "O(1)"
                };
            }

            if (sortingAlgorithm === "insertion") {
                return {
                    time: "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
                    space: "O(1)"
                };
            }

            if (sortingAlgorithm === "merge") {
                return {
                    time: "Best: O(n log n) | Avg: O(n log n) | Worst: O(n log n)",
                    space: "O(n)"
                };
            }

            if (sortingAlgorithm === "quick") {
                return {
                    time: "Best: O(n log n) | Avg: O(n log n) | Worst: O(n²)",
                    space: "O(log n) average"
                };
            }
        }


        /* =========================
           HEAP
        ========================= */

        if (visualizationMode === "heap") {
            return {
                time: "O(log n)",
                space: "O(n)"
            };
        }


        /* =========================
           GRAPH
        ========================= */

        if (visualizationMode === "graph") {
            return {
                time: "O(V + E)",
                space: "O(V)"
            };
        }


        /* =========================
           GREEDY
        ========================= */

        if (visualizationMode === "greedy") {
            return {
                time: "O(n)",
                space: "O(1)"
            };
        }


        /* =========================
           DYNAMIC PROGRAMMING
        ========================= */

        if (visualizationMode === "dp") {
            return {
                time: "Depends on algorithm",
                space: "Depends on algorithm"
            };
        }

         /* =========================
           STACK
        ========================= */

        if (visualizationMode === "stack") {
            return {
                time: "O(1)",
                space: "O(n)"
            };
        }

        /* =========================
           QUEUE
        ========================= */


        if (visualizationMode === "queue") {
            return {
                time: "O(1)",
                space: "O(n)"
            };
        }

        /* =========================
           LINKED LIST
        ========================= */


        if (visualizationMode === "linkedList") {
            return {
                time: "O(1) insert / O(n) search-delete",
                space: "O(n)"
            };
        }

         /* =========================
           ARRAY TRAVERSAL
        ========================= */

        if (visualizationMode === "arrayTraversal") {
            return {
                time: "O(n)",
                space: "O(1)"
            };
        }

        /* =========================
           BINARY AND LINEAR SEARCH
        ========================= */


        if (visualizationMode === "binarySearch") {
            return {
                time: "Best: O(1) | Avg: O(log n) | Worst: O(log n)",
                space: "O(1)"
            };
        }

        if (visualizationMode === "linearSearch") {
            return {
                time: "Best: O(1) | Avg: O(n) | Worst: O(n)",
                space: "O(1)"
            };
        }

          /* =========================
           PREFIX SUM
        ========================= */

        if (visualizationMode === "prefixSum") {
            return {
                time: "O(n)",
                space: "O(n)"
            };
        }


        /* =========================
           DEFAULT
        ========================= */

        return {
            time: "O(n²)",
            space: "O(1)"
        };
    };


    const complexity = getComplexity();


    return (
        <div className="info-card">

            <h2>Algorithm Info</h2>

            <div className="complexity-row">
                <span>Time Complexity</span>
                <strong>
                    {complexity.time}
                </strong>
            </div>

            <div className="complexity-row">
                <span>Space Complexity</span>
                <strong>
                    {complexity.space}
                </strong>
            </div>

            <div className="info-description">

                <h3>About</h3>

                <p>
                    This visualization shows the algorithm's
                    execution step by step so you can understand
                    its internal operations.
                </p>

            </div>

        </div>
    );
}

export default AlgorithmInfo;