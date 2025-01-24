function solution(n) {
    let arr = Array.from({length: n}, (_,i)=>(i+1));
    let arr2 = arr.filter(x => n % x == 1)
    
    return arr2[0];
}