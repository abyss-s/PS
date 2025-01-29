function solution(num_str) {
    return [...num_str].map(i=>parseInt(i)).reduce((a,c)=>a+c,0);
}