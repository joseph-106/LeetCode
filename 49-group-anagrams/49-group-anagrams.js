const groupAnagrams = function (strs) {
  const answer = [];
  const temp = [];
  for (let i = 0; i < strs.length; i++) {
    // 배열로 쪼개서 정렬하고 다시 합치기
    let sort = strs[i].split('').sort().join('');
    if (temp.includes(sort)) {
      // 임시 배열에 정렬된 값이 있다면
      // 정답의 해당 위치 배열에 push
      answer[temp.indexOf(sort)].push(strs[i]);
    } else {
      // 임시 배열에 정렬된 값이 없다면
      // 정답에 신규 배열 push
      answer.push([strs[i]]);
      // 임시 배열에 정렬된 값 push
      temp.push(sort);
    }
  }
  return answer;
};