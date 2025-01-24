function solution(x) {
    let sum = (x+'').split('').reduce((a, b)=> parseInt(a) + parseInt(b));
    console.log(sum);
    return (x % sum == 0); 
}