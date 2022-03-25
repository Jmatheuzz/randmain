export default class Numeros{
    constructor(min, max, qtd){
        this.min = Number(min);
        this.max = Number(max);
        this.qtd = Number(qtd);
    }

    random(max, min, qtd){
        max = Number(max);
        min = Number(min);
        const arrayNum = [];
        for(let i =0 ; i<this.qtd ; i++){
            let aux = Math.random()*(this.max-this.min);
            aux = aux > 0.4 ? Math.floor( aux + this.min + 1):Math.floor(aux+this.min);
            arrayNum.push(aux);
        }

        return arrayNum;
    }

    randomUnico(max, min, qtd){
        max = Number(max);
        min = Number(min);
        const arrayNum = [];
        for(let i =0 ; i<this.qtd ; i++){
            let aux = Math.random()*(this.max-this.min);
            aux = aux > 0.4 ? Math.floor( aux + this.min + 1):Math.floor(aux+this.min);
            if(this.verificaExistencia(arrayNum, aux) && i>0){
                i = i - 1;
            }else{
                arrayNum.push(aux);
            }
        }
        return arrayNum;
    }

    randomUnicoBug(max, min, qtd){
        max = Number(max);
        min = Number(min);
        const arrayNum = [];

        while(arrayNum.length < (this.max - this.min + 1)){
            let aux = Math.random()*(this.max-this.min);
            aux = aux > 0.4 ? Math.floor( aux + this.min + 1):Math.floor(aux+this.min);

            if(this.verificaExistencia(arrayNum, aux) && arrayNum.length>0){
                
            }else{
                arrayNum.push(aux);
            }

        }
        return arrayNum;

    }

    verificaExistencia(vetor, x){
        for(let num of vetor){
            if(num === x){
                return true;
            }
        }
        return false;
    
    }

}