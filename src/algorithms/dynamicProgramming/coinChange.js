function coinChange(coins, amount) {
    const steps = [];

    const dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    steps.push({
        type: "dpInit",
        index: 0,
        value: dp[0],
        dp: [...dp]
    });

    for (let i = 1; i <= amount; i++) {

        for (const coin of coins) {

            if (coin <= i) {

                steps.push({
                    type: "dpCompare",
                    index: i,
                    coin,
                    previousIndex: i - coin,
                    dp: [...dp]
                });

                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1
                );

                steps.push({
                    type: "dpUpdate",
                    index: i,
                    coin,
                    value: dp[i],
                    previousIndex: i - coin,
                    dp: [...dp]
                });
            }
        }
    }

    const result =
        dp[amount] === Infinity
            ? -1
            : dp[amount];

    steps.push({
        type: "dpComplete",
        result,
        dp: [...dp]
    });

    return {
        result,
        steps
    };
}

export default coinChange;