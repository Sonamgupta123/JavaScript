var maximumScore = function(grid) {
    const n = grid.length;

    // Step 1: prefix sum per column
    const pref = Array.from({ length: n + 1 }, () => Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            pref[i + 1][j] = pref[i][j] + grid[i][j];
        }
    }
      // helper to get sum from l → r in column j
    const getSum = (j, l, r) => {
        if (l > r) return 0;
        return pref[r + 1][j] - pref[l][j];
    };

    // dp[j][h] = max score till column j with height h
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // first column → 0 score
    for (let h = 0; h < n; h++) dp[0][h] = 0;

    // DP transitions
    for (let j = 1; j < n; j++) {
        for (let curr = 0; curr < n; curr++) {
            let best = 0;
