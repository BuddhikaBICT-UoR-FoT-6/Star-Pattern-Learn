function drawSquare(n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += '*'.repeat(n) + '\n';
    }
    return s;
}

function drawPyramid(n) {
    let s = '';
    for (let i = 1; i <= n; i++) {
        s += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return s;
}

function drawTriangle(n) {
    let s = '';
    for (let i = 1; i <= n; i++) {
        s += '*'.repeat(i) + '\n';
    }
    return s;
}

function drawDiamond(n) {
    let s = '';
    // Top half
    for (let i = 1; i <= n; i++) {
        s += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    // Bottom half
    for (let i = n - 1; i >= 1; i--) {
        s += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return s;
}

function drawReverseTriangle(n) {
    let s = '';
    for (let i = n; i >= 1; i--) {
        s += '*'.repeat(i) + '\n';
    }
    return s;
}