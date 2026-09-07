const maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = Infinity;
    

    for(let i = 0; i < prices.length;i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        let profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit,profit);
    }
    
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
