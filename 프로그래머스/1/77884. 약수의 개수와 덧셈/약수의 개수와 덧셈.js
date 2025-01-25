function solution(left, right) {
    return Array.from({length: right - left + 1}, (_, i) => left + i)
        .reduce((sum, n) => {
            var cnt = Array.from({length: n}, (_, j) => j + 1).filter(j => n % j === 0).length;
            return cnt % 2 === 0 ? sum + n : sum - n;
        }, 0);
}
