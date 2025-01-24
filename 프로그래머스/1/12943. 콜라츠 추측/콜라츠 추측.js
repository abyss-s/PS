function solution(num) {
    let cnt = 0;
    if(num == 1) return 0;
    for (let i =0; i < 500; i++){
        if(num == 1) break;
        if(num % 2 == 0){
            num /= 2; 
        }
        else{
            num *= 3;
            num++; 
        }
        cnt++;
    }
    return (num == 1) ? cnt : -1;
}