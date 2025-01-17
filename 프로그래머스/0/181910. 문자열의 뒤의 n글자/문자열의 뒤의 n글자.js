function solution(my_string, n) {
    var answer = '';
    len = my_string.length;
    answer = my_string.slice(len - n);
    return answer;
}