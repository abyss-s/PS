function solution(arr, idx) {
    tmp = -1
    for(let i = idx; i < arr.length; i++){
        if(arr[i] == 1)
            return i

    }
   return tmp;
}