/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
    const fibArr = [0, 1];
    if (n < 2){
        return n
    } else{
        for (let i = 2; i <= n; i++){
            fibArr.push(fibArr[i-2] + fibArr[i-1])
        }
    }
    return fibArr.pop();
};