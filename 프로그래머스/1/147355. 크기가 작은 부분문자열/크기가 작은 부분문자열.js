const solution = (t, p) => {
  let cnt = 0;
  let results = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    results.push(t.slice(i, i + p.length));
  }
  results.forEach((i) => {
    if (i <= p) cnt++;
  });
  return cnt;
};