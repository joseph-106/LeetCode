/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 음수인 경우 false
    if (x<0) {
        return false
        
    // 양수인 경우
    } else {
        
        // 문자열로 변환해 하나씩 배열에 담기
        var array = x.toString().split("")   
        
        // 문자열 길이의 절반만큼 반복문 돌려 앞뒤 비교
        for (var i = 0; i<array.length/2; i++){
            if (array[i] != array[array.length-1-i]){
                
            // 소거법 ~ 불일치가 있다면 false
            return false
            } 
        } 
        
        // 모두 일치한다면 true
        return true
    }
}
