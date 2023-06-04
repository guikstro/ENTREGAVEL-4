
let fibo = 0;

function fibonacci(fibo){
    let termo1 = 0;
    let termo2 = 1;
    let soma = [0,1];

    for (let i = 2; i<fibo; i++){
        
        soma [i] = termo1 + termo2;
        termo1 = termo2;
        termo2 = soma[i];
    }
    return soma;
}
module.exports = fibonacci;