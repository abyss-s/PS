function solution(arr, delete_list) {
    var answer = [];
    for(let i =0; i <arr.length; i++){
        if(delete_list.includes(arr[i]))
                continue;
        else
            answer.push(arr[i]);
            
    }
    return answer;
}