function jumpGame(nums) {
    const steps = [];

    let farthest = 0;

    for (let i = 0; i < nums.length; i++) {

        steps.push({
            type: "visit",
            index: i,
            value: nums[i],
            farthest,
            nums: [...nums]
        });

        if (i > farthest) {
            steps.push({
                type: "blocked",
                index: i,
                farthest,
                nums: [...nums]
            });

            return {
                result: false,
                steps
            };
        }

        const newFarthest = Math.max(
            farthest,
            i + nums[i]
        );

        if (newFarthest !== farthest) {
            farthest = newFarthest;

            steps.push({
                type: "updateFarthest",
                index: i,
                farthest,
                nums: [...nums]
            });
        }
    }

    steps.push({
        type: "complete",
        farthest,
        nums: [...nums]
    });

    return {
        result: true,
        steps
    };
}

export default jumpGame;