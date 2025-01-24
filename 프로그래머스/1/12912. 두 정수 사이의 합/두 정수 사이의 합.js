function solution(a, b) {
    return a < b ?     (Array.from({length: b-a+1}, (_, i)=> (i + a)).reduce((a, b) => a+b, 0)) : (Array.from({length: a-b+1}, (_, i)=> (i + b)).reduce((a, b) => a+b, 0))
}