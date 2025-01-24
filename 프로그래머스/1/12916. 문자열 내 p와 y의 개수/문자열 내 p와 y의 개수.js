function solution(s){
    let a = 0, b = 0, arr = s.split('');
    a = arr.filter(i => (i == 'p' || i == 'P'));
    b = arr.filter(i => (i == 'y' || i == 'Y'));
    return ( a.length == b.length ) ? true : false;
}