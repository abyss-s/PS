function solution(s) {
    return (s.length == 4 || s.length == 6) && [...s].map(i => (i >= '0' && i <= '9')).reduce((a,c)=>a && c);
}