function solution(q, r, code) {
    var answer = '';
    answer += code.split('').filter((_, i) => (i% q == r)).join('');
    return answer;
}