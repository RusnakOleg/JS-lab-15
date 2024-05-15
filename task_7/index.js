function mul(...args) {
    let product = 1;
    let hasNumber = false;
    
    for (let arg of args) {
        if (typeof arg === 'number') {
            product *= arg;
            hasNumber = true;
        }
    }
    
    return hasNumber ? product : 0;
}

console.log(mul(1, "str", 2, 3, true)); 
console.log(mul(null, "str", false, true)); 
