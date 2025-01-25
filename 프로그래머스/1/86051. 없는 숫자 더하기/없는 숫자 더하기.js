function solution(numbers) {
    let targets=[0,1,2,3,4,5,6,7,8,9];
    return targets.filter(i => !numbers.includes(i)).reduce((a, b)=>(a+b),0);
}
