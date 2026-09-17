function assignCookies(g, s) {
    const greed = [...g].sort((a, b) => a - b);
    const cookies = [...s].sort((a, b) => a - b);

    const steps = [];

    let child = 0;
    let cookie = 0;
    let satisfied = 0;

    while (
        child < greed.length &&
        cookie < cookies.length
    ) {
        steps.push({
            type: "compare",
            childIndex: child,
            cookieIndex: cookie,
            greed: [...greed],
            cookies: [...cookies],
            satisfied
        });

        if (cookies[cookie] >= greed[child]) {

            satisfied++;

            steps.push({
                type: "assign",
                childIndex: child,
                cookieIndex: cookie,
                greed: [...greed],
                cookies: [...cookies],
                satisfied
            });

            child++;
            cookie++;

        } else {

            steps.push({
                type: "skipCookie",
                cookieIndex: cookie,
                greed: [...greed],
                cookies: [...cookies],
                satisfied
            });

            cookie++;
        }
    }

    steps.push({
        type: "complete",
        satisfied,
        greed: [...greed],
        cookies: [...cookies]
    });

    return {
        result: satisfied,
        steps
    };
}

export default assignCookies;