function solution(array, commands) {
    return commands.map(([i, j, k]) => {
        const arr = array.slice(i - 1, j); 
        arr.sort((a, b) => a - b); 
        return arr[k - 1];
    });
}