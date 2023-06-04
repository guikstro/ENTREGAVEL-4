

function primo(numero){
   let cont = 0;
   for (let i=1; i<=numero; i++){
       if (numero%i === 0){
           cont ++;
       }
   }
   if (cont == 2){
       return true    
   }else{
       return false
   }
}
module.exports = primo;
