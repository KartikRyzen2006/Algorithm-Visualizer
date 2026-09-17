function longestIncreasingSubsequence(nums) {
    const steps = [];

    if (nums.length === 0) {
        return {
            result: 0,
            steps: [
                {
                    type: "dpComplete",
                    result: 0,
                    dp: []
                }
            ]
        };
    }

    const dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {

        steps.push({
            type: "dpInit",
            index: i,
            value: dp[i],
            nums: [...nums],
            dp: [...dp]
        });

        for (let j = 0; j < i; j++) {

            steps.push({
                type: "dpCompare",
                index: i,
                previousIndex: j,
                nums: [...nums],
                dp: [...dp]
            });

            if (nums[j] < nums[i]) {

                dp[i] = Math.max(
                    dp[i],
                    dp[j] + 1
                );

                steps.push({
                    type: "dpUpdate",
                    index: i,
                    previousIndex: j,
                    value: dp[i],
                    nums: [...nums],
                    dp: [...dp]
                });
            }
        }
    }

    const result = Math.max(...dp);

    steps.push({
        type: "dpComplete",
        result,
        nums: [...nums],
        dp: [...dp]
    });

    return {
        result,
        steps
    };
}

export default longestIncreasingSubsequence;