function solution(my_string) {
    let arr = new Array(52).fill(0);
    
    for(i of my_string){
        code = i.charCodeAt(0);
        arr[code <= 90 ? code - 65 : code - 71]++;
    }
    
    return arr
}