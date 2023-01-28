function sum(a) {
    function func(b) {
            if (Number.isFinite(b)) {
                return sum(a + b);
            } else {
                return a;
            }
    }
    return func;
}

console.log(sum(1)(2)(3)());
