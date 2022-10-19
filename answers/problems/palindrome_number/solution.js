/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var input = x.toString();
    var newArray = input.split("");
    var k = newArray.length - 1;
    var boolean = true;
    for(var i = 0; i < newArray.length/2; i++) {
        console.log(newArray[i])
        console.log(newArray[k])
        if(newArray[i] !== newArray[k]) {
            return boolean = false;
        }
        k--;
    }
    return boolean;
};