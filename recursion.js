let c;

function sum(a) {
    let accum = a;
    function closeSum(b) {
        accum += b;
        c = accum;
        return closeSum;
    }
    return closeSum;
}

sum(1)(2)(3);
console.log(c);
