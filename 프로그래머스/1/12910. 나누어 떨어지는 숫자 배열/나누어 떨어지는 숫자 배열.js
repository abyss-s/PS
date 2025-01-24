function solution(arr, divisor) {
    arr2 = arr.filter(i => (i % divisor == 0)).sort((a, b)=> (a-b));
    return arr2.length == 0 ? [-1] : arr2;
}