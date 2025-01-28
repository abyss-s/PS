function solution(arr, intervals) {
    var a1 = intervals[0][0], a2 = intervals[0][1], 
        b1 = intervals[1][0], b2 = intervals[1][1];
    arr1 = arr.slice(a1, a2+1);
    arr2 = arr.slice(b1, b2+1);
    //console.log(arr1, arr2);
    return arr1.concat(arr2);
}