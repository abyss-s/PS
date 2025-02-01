function solution(n) {
    // toString, parseInt 매개변수로 진법 지정 가능
    return parseInt([...n.toString(3)].reverse().join(''),3);
}