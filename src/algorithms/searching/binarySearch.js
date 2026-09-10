const binarySearch = (arr,target) => {
    const operations = [];

    let left = 0;
    let right = arr.length-1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        operations.push({
            type: "visit",
            index:mid
        })

        if(arr[mid] === target) {
            operations.push({
                type: "found",
                index: mid
            })
            break;

        }

        if(target > arr[mid] ) {
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return operations;
}

export default binarySearch;