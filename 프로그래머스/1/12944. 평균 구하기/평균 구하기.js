function solution(arr) {
    ans = arr.reduce((a, b)=>(a + b), 0)
    return ans/arr.length;
}