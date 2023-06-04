
let num1;
let num2;

function MDC(num1, num2){
                   
    while (num2 != 0){
        let mod = num1%num2;
        num1 = num2;
        num2 = mod;
    }
    return num1;
}

module.exports = MDC;