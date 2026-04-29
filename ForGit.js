var maximumScore = function(grid) {
    const n = grid.length;

    // Step 1: prefix sum per column
    const pref = Array.from({ length: n + 1 }, () => Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            pref[i + 1][j] = pref[i][j] + grid[i][j];
        }
    }