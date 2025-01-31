function solution(number) {
    var cnt = 0;
    const len = number.length;
    
    // 3중반복문으로 서로다른 인덱스 3개 조합
    for(let i =0; i < len-2; i++) 
        for(let j =i+1; j < len-1; j++)
            for(let k =j+1; k < len; k++)
                if(number[i]+number[k]+number[j]===0)
                    cnt++;
    return cnt;   
}