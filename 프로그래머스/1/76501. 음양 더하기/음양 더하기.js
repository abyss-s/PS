function solution(absolutes, signs) {
    let sum = 0;
    for(let i = 0; i < absolutes.length; i++){
        signs[i] ? sum += absolutes[i] : sum -= absolutes[i];
        console.log(sum);
    }
    return sum;
}