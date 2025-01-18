function solution(my_string, is_suffix) {
    arr = [];
    len = my_string.length;
    for(i = 0; i < len; i++)
        arr.push(my_string.substr(i));
    if(arr.includes(is_suffix))
        return 1;
    else
        return 0;

}