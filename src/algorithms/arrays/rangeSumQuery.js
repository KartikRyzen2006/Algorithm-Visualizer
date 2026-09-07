var NumArray = function(nums) {
    this.prefix = [0];

    for (let i = 0; i < nums.length; i++) {
        this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
};


// Testing
const obj = new NumArray([1, 2, 3, 4, 5]);

console.log(obj.sumRange(0, 2)); // 6
console.log(obj.sumRange(2, 4)); // 12