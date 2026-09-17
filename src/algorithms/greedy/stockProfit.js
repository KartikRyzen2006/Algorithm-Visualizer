function stockProfit(prices) {
    const steps = [];

    let profit = 0;

    for (let i = 1; i < prices.length; i++) {

        steps.push({
            type: "compare",
            index1: i - 1,
            index2: i,
            prices: [...prices],
            profit
        });

        if (prices[i] > prices[i - 1]) {

            const gain = prices[i] - prices[i - 1];

            profit += gain;

            steps.push({
                type: "takeProfit",
                index1: i - 1,
                index2: i,
                gain,
                prices: [...prices],
                profit
            });

        } else {

            steps.push({
                type: "skip",
                index1: i - 1,
                index2: i,
                prices: [...prices],
                profit
            });
        }
    }

    steps.push({
        type: "complete",
        prices: [...prices],
        profit
    });

    return {
        result: profit,
        steps
    };
}

export default stockProfit;