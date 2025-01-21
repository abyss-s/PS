function solution(num_list) {
    let arr = num_list.filter(i => (parseInt(i) < 0));
    return (arr.length == 0) ? -1 : num_list.indexOf(arr[0]);
}