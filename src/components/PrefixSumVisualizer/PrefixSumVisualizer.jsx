import "./PrefixSumVisualizer.css";

function PrefixSumVisualizer({
    array = [],
    prefix = [],
    activeIndex = null
}) {

    return (
        <div className="prefix-sum-visualizer">

            <div className="prefix-sum-container">

                <div className="prefix-sum-row">

                    <div className="prefix-sum-title">
                        Original
                    </div>

                    {array.map((value, index) => (

                        <div
                            key={index}
                            className={`prefix-sum-cell ${
                                index === activeIndex
                                    ? "prefix-sum-active"
                                    : ""
                            }`}
                        >

                            <div className="prefix-sum-value">
                                {value}
                            </div>

                            <span>
                                index {index}
                            </span>

                        </div>

                    ))}

                </div>


                <div className="prefix-sum-row">

                    <div className="prefix-sum-title">
                        Prefix Sum
                    </div>

                    {array.map((_, index) => (

                        <div
                            key={index}
                            className={`prefix-sum-cell ${
                                index === activeIndex
                                    ? "prefix-sum-active"
                                    : ""
                            }`}
                        >

                            <div className="prefix-sum-value prefix-value">

                                {prefix[index] !== undefined
                                    ? prefix[index]
                                    : "-"}

                            </div>

                            <span>
                                {index === activeIndex
                                    ? "current"
                                    : ""}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default PrefixSumVisualizer;