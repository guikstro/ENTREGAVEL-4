let notas1 = [];


function contar(notas1){
    let corte = 5;
    let cont = 0;

    for (let i = 0; i < notas1.length; i++) {
        
        if(notas1[i] >= corte){
            
            cont++;
        }

    }
    return cont;


  }
  module.exports = contar



