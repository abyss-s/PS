function solution(my_string) {
    var answer = [];
    len = my_string.length;
    for(let i =0; i < len; i++)
        answer.push(my_string.slice(len-i-1));
    answer.sort();
    return answer;
}