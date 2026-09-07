let s = "A man, a plan, a canal: Panama"
const validPalindrome = (s) => {
    let s1 = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    let left = 0;
    let right = s1.length-1;

    while(left < right) {
        if(s1[left] !== s1[right]) {
            return false;
        }
        left++;
        right--

    }
    return true
}
console.log(validPalindrome(s));
