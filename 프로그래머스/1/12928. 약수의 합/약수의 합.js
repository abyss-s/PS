function solution(n) {
    var answer = 0;
    arr = Array.from({length: n}, (_, i)=> i+1).filter(i => n %  i ==0)
    for(i of arr)
        answer += i;
    return answer;
}