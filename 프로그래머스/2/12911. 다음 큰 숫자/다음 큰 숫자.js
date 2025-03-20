const solution=(n)=>{
    let countOnes = count1(n);
    let res = n + 1;
    while (count1(res) !== countOnes) {
        res++;
    }
    return res;
}
const count1=(num)=> num.toString(2).split('0').join('').length;




