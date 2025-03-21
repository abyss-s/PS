function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    sizes.forEach(([w, h]) => {
        const ww = Math.max(w, h);
        const hh = Math.min(w, h);
        maxWidth = Math.max(maxWidth, ww);
        maxHeight = Math.max(maxHeight, hh);
    });
    return maxWidth * maxHeight;
}