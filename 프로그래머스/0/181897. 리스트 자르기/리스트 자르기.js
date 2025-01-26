function solution(n, slicer, num_list) {
    var ans = [];
    var a = slicer[0], b = slicer[1], c = slicer[2];
    if(n==1)
        ans = num_list.slice(0, b+1);
    if(n==2)
        ans = num_list.slice(a);
    if(n==3)
        ans = num_list.slice(a, b+1);
    if(n==4){
        for(let i = a; i <= b; i+=c){
            ans.push(num_list[i]);
        }
    }
    return ans;
}