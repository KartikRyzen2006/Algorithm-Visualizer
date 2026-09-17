function houseRobber(nums) {
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

    const dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];

    steps.push({
        type: "dpInit",
        index: 0,
        value: dp[0],
        dp: [...dp]
    });

    if (nums.length > 1) {
        dp[1] = Math.max(nums[0], nums[1]);

        steps.push({
            type: "dpUpdate",
            index: 1,
            value: dp[1],
            previous: [0],
            dp: [...dp]
        });
    }

    for (let i = 2; i < nums.length; i++) {

        steps.push({
            type: "dpCompare",
            index: i,
            previous: [i - 1, i - 2],
            nums: [...nums],
            dp: [...dp]
        });

        dp[i] = Math.max(
            dp[i - 1],
            nums[i] + dp[i - 2]
        );

        steps.push({
            type: "dpUpdate",
            index: i,
            value: dp[i],
            previous: [i - 1, i - 2],
            nums: [...nums],
            dp: [...dp]
        });
    }

    steps.push({
        type: "dpComplete",
        result: dp[nums.length - 1],
        nums: [...nums],
        dp: [...dp]
    });

    return {
        result: dp[nums.length - 1],
        steps
    };
}

export default houseRobber;