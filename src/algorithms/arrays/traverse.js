

const traverse = (arr) => {
    let operation = [];

    for(let i = 0; i< arr.length;i++) {
        operation.push ({
            type: "visit",
            index: i
        }); 
    }
    return operation
}
const arr = [10, 20, 30, 40, 50];
console.log(traverse(arr));

export default traverse;