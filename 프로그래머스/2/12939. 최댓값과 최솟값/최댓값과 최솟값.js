function solution(s) {
    var arr = s.split(' ').map(i => parseInt(i)).sort((a, b)=>a-b);
    return Math.min(...arr)+' '+Math.max(...arr);
}