/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(x){
    // x(숫자)를 문자 배열로 쪼개고 각 요소를 다시 숫자로 변환
    var array = x.toString().split("").map(Number);
    
    // reduce로 배열 모든 요소들의 합 반환
    var sum = array.reduce((stack, el)=>{
      return stack + el;
    }, 0);
    
    // 한자릿수면 반환하고 아니면 재호출
    if (sum < 10) {
        return sum;
    } else {
        return addDigits(sum)
    }
};