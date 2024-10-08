function solution(a, b, c, d) {
    let count = Array(7).fill(0); // 눈금을 카운트하기 위한 배열 (1~6 사용)

    // 배열에 카운트 기록
    count[a]++;
    count[b]++;
    count[c]++;
    count[d]++;
    
    let score = 0;

    if (count.includes(4)) {
        // 모두 같은 경우
        score = 1111 * count.indexOf(4);
    } else if (count.includes(3)) {
        // 3개가 같고 1개가 다른 경우
        let p = count.indexOf(3);
        let q = count.indexOf(1);
        score = Math.pow(10 * p + q, 2);
    } else if (count.filter(x => x === 2).length === 2) {
        // 두 쌍, 두쌍이 같은 경우
        let [p, q] = count.map((v, i) => v === 2 ? i : 0).filter(i => i !== 0);
        score = (p + q) * Math.abs(p - q);
    } else if (count.includes(2)) {
        // 한 쌍만 같고 다른 쌍은 다를 경우
        let p = count.indexOf(2);
        let [q, r] = count.map((v, i) => v === 1 ? i : 0).filter(i => i !== 0);
        score = q * r;
    } else {
        // 모두 다른 경우
        score = Math.min(a, b, c, d);
    }

    return score;
}