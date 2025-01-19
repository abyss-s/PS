function solution(my_string, s, e) {
    var answer = '';
    answer += my_string.substr(0, s);
    answer += my_string.slice(s, e+1).split('').reverse().join('');
    answer += my_string.substr(e+1);
    return answer;
}