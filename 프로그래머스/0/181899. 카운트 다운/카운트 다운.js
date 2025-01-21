function solution(start_num, end_num) {
    let arr = Array.from(
        { length: start_num - end_num + 1 },
        (_, i) => end_num + i
    );
    return arr.sort((a, b) => b - a);
}
