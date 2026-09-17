function climbingStairs(n) {
    const steps = [];

    const dp = new Array(n + 1).fill(0);

    if (n >= 1) {
        dp[1] = 1;
    }

    if (n >= 2) {
        dp[2] = 2;
    }

    if (n >= 1) {
        steps.push({
            type: "dpInit",
            index: 1,
            value: dp[1],
            dp: [...dp]
        });
    }

    if (n >= 2) {
        steps.push({
            type: "dpInit",
            index: 2,
            value: dp[2],
            dp: [...dp]
        });
    }

    for (let i = 3; i <= n; i++) {

        steps.push({
            type: "dpCompare",
            index: i,
            previous: [i - 1, i - 2],
            dp: [...dp]
        });

        dp[i] = dp[i - 1] + dp[i - 2];

        steps.push({
            type: "dpUpdate",
            index: i,
            value: dp[i],
            previous: [i - 1, i - 2],
            dp: [...dp]
        });
    }

    steps.push({
        type: "dpComplete",
        result: dp[n],
        dp: [...dp]
    });

    return {
        result: dp[n],
        steps
    };
}

export default climbingStairs;