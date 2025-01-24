// function solution(x, n) {
//     let arr = []
//     for(let i = x; i<= x*n; i+= x){
//         arr.push(i);
//     }
//     return arr;
// }

function solution(x, n) {
    let arr =[...Array(n).keys()].map(i => x*(i+1));
    return arr;
}