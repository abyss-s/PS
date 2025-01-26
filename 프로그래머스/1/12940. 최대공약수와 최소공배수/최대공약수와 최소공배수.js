function gcd(a, b) {
    return (b == 0 ? a : gcd(b, a % b));
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    var res = [];
    res.push(gcd(n, m), lcm(n, m));
    return res;
}
