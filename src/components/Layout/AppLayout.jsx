import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";

function AppLayout({
    children,
    visualizationMode,
    setVisualizationMode,
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
    return (
        <div className="app-shell">

            <Navbar />

            <div className="app-body">

                <Sidebar
                    visualizationMode={visualizationMode}
                    setVisualizationMode={setVisualizationMode}
                    handleVisualizationChange={handleVisualizationChange}
                    traversal={traversal}
                    setTraversal={setTraversal}
                    sortingAlgorithm={sortingAlgorithm}
                    setSortingAlgorithm={setSortingAlgorithm}
                    graphAlgorithm={graphAlgorithm}
                    setGraphAlgorithm={setGraphAlgorithm}
                    greedyAlgorithm={greedyAlgorithm}
                    setGreedyAlgorithm={setGreedyAlgorithm}
                    dpAlgorithm={dpAlgorithm}
                    setDpAlgorithm={setDpAlgorithm}
                />

                <main className="app-content">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default AppLayout;