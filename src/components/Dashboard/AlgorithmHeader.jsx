function AlgorithmHeader({
    visualizationMode,
    traversal,
    graphAlgorithm,
    greedyAlgorithm,
    dpAlgorithm
}) {
    const getTitle = () => {
        if (visualizationMode === "heap") {
            return "Heap";
        }

        if (visualizationMode === "graph") {
            return graphAlgorithm === "bfs" ? "Breadth First Search" : "Depth First Search";
        }

        if (visualizationMode === "greedy") {
            if (greedyAlgorithm === "cookies") return "Assign Cookies";
            if (greedyAlgorithm === "stock") return "Best Time to Buy and Sell Stock II";
            if (greedyAlgorithm === "jumpGame") return "Jump Game";
            if (greedyAlgorithm === "jumpGameII") return "Jump Game II";
        }

        if (visualizationMode === "dp") {
            if (dpAlgorithm === "climbingStairs") return "Climbing Stairs";
            if (dpAlgorithm === "houseRobber") return "House Robber";
            if (dpAlgorithm === "coinChange") return "Coin Change";
            if (dpAlgorithm === "longestIncreasingSubsequence") {
                return "Longest Increasing Subsequence";
            }
        }

        return "Algorithm Visualizer";
    };

    const getDescription = () => {
        if (visualizationMode === "heap") {
            return "Visualize heap insertion, comparison, swapping and extraction operations.";
        }

        if (visualizationMode === "graph") {
            return graphAlgorithm === "bfs"
                ? "Explores a graph level by level using a queue."
                : "Explores a graph deeply using recursion and backtracking.";
        }

        if (visualizationMode === "greedy") {
            if (greedyAlgorithm === "cookies") {
                return "Assigns cookies to children using a greedy strategy.";
            }

            if (greedyAlgorithm === "stock") {
                return "Maximizes profit by taking every positive price difference.";
            }

            if (greedyAlgorithm === "jumpGame") {
                return "Determines whether the last index can be reached.";
            }

            if (greedyAlgorithm === "jumpGameII") {
                return "Finds the minimum number of jumps needed to reach the last index.";
            }
        }

        if (visualizationMode === "dp") {
            if (dpAlgorithm === "climbingStairs") {
                return "Calculates the number of distinct ways to reach the top.";
            }

            if (dpAlgorithm === "houseRobber") {
                return "Finds the maximum amount that can be robbed without robbing adjacent houses.";
            }

            if (dpAlgorithm === "coinChange") {
                return "Finds the minimum number of coins required to make a given amount.";
            }

            if (dpAlgorithm === "longestIncreasingSubsequence") {
                return "Finds the longest strictly increasing subsequence.";
            }
        }

        return "Explore how algorithms work step by step through interactive visualization.";
    };

    return (
        <div className="algorithm-header">

            <h1>{getTitle()}</h1>

            <p>{getDescription()}</p>

        </div>
    );
}

export default AlgorithmHeader;