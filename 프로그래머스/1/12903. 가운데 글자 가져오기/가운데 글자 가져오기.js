function solution(s) {
    var len = s.length;
    return (len % 2 == 0) ? 
        s.substr(len/2-1, 2) : s[(len+1)/2-1];
}