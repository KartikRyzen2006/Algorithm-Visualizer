const containsDuplicate = (arr) => {
    let seen = new Set();
    let operations = [];
    for(let i = 0; i< arr.length;i++) {
        if(seen.has(arr[i])) {
            operations.push({
                type:"duplicate",
                index:i
            })
        }else {
            seen.add(arr[i]);
            operations.push({
                type:"visit",
                index: i
            })
        }
        
    }
    return operations
}

export default containsDuplicate;