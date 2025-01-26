function solution(arr) {
    if (!arr.includes(2))
        return [-1];
    else{
        let a = arr.indexOf(2), b = arr.lastIndexOf(2);
        return arr.slice(a, b+1);
    }
}