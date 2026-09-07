const arr = [2,7,9,11];
let target = 9;
const twoSum = (arr,target) => {
    let sumMap = new Map;

    for(let i = 0; i<arr.length;i++) {
        let needed = target - nums[i];

        if(sumMap.has(needed)) {
            return [sumMap.get(needed),i];
        }
        sumMap.set(arr[i],i);
    }
}