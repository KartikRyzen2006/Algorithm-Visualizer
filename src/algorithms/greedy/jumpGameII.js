function jumpGameII(nums) {
    const steps = [];

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        steps.push({
            type: "visit",
            index: i,
            value: nums[i],
            currentEnd,
            farthest,
            jumps,
            nums: [...nums]
        });

        farthest = Math.max(
            farthest,
            i + nums[i]
        );

        steps.push({
            type: "updateFarthest",
            index: i,
            farthest,
            currentEnd,
            jumps,
            nums: [...nums]
        });

        if (i === currentEnd) {

            jumps++;
            currentEnd = farthest;

            steps.push({
                type: "jump",
                index: i,
                currentEnd,
                farthest,
                jumps,
                nums: [...nums]
            });
        }
    }

    steps.push({
        type: "complete",
        jumps,
        nums: [...nums]
    });

    return {
        result: jumps,
        steps
    };
}

export default jumpGameII;