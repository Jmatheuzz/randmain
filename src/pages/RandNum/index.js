import React from "react";
import "./style.css";
import Numeros from './Numeros';
import success from "../../messages/Success";

export default function RandNum(){
    const [resultado, setResultado] = React.useState('');
    const [gerado, setGerado] = React.useState(false);

    function handleSubmit(e){
        e.preventDefault();
        const minimo = document.querySelector('.numero-minimo');
        const maximo = document.querySelector('.numero-maximo');
        const qtdNUMEROS = document.querySelector('.numeros-gerados');
        const unicos = document.querySelector('.numeros-unicos');
        const ordem = document.querySelector('#ordem');
        const resultado = document.querySelector('.resultado');
        const resultadoContainer = document.querySelector('.resultado-container');
        setGerado(true);
        let aux = '';
        const randNum = new Numeros(minimo.value, maximo.value, qtdNUMEROS.value);
        if(ordem.options[ordem.selectedIndex].value === 'crescente'){
            if(unicos.checked){
                if(Number(maximo.value) - Number(minimo.value) + 1 < Number(qtdNUMEROS.value)){
                    const numeros = randNum.randomUnicoBug();
                    numeros.sort((a,b)=> a - b);
                    for(let alea of numeros){
                        if(alea===numeros[numeros.length-1]){
                            aux += `${alea} `;
                            break;
                        }
                        aux += `${alea}, `;
                    }
                }else{
                    const numeros = randNum.randomUnico();
                    numeros.sort((a,b)=> a - b);
                    for(let alea of numeros){
                        if(alea===numeros[numeros.length-1]){
                            aux += `${alea} `;
                            break;
                        }
                        aux += `${alea}, `;
                    }
                }
            }else{
                const numeros = randNum.random();
                numeros.sort((a,b)=> a - b);
                for(let alea of numeros){
                    if(alea===numeros[numeros.length-1]){
                        aux += `${alea} `;
                        break;
                    }
                    aux += `${alea}, `;
                }
            }
        } else if(ordem.options[ordem.selectedIndex].value === 'decrescente'){
            if(unicos.checked){
                if(Number(maximo.value) - Number(minimo.value) + 1 < Number(qtdNUMEROS.value)){
                    const numeros = randNum.randomUnicoBug();
                    numeros.sort((a,b)=> b - a);
                    for(let alea of numeros){
                        if(alea===numeros[numeros.length-1]){
                            aux += `${alea} `;
                            break;
                        }
                        aux += `${alea}, `;
                    }
                }else{
                    const numeros = randNum.randomUnico();
                    numeros.sort((a,b)=> b - a);
                    for(let alea of numeros){
                        if(alea===numeros[numeros.length-1]){
                            aux += `${alea} `;
                            break;
                        }
                        aux += `${alea}, `;
                    }
                }
            }else{
                const numeros = randNum.random();
                numeros.sort((a,b)=> b - a);
                for(let alea of numeros){
                    if(alea===numeros[numeros.length-1]){
                        aux += `${alea} `;
                        break;
                    }
                    aux += `${alea}, `;
                }
            }
        } else{
            if(unicos.checked){
                if(Number(maximo.value) - Number(minimo.value) + 1 < Number(qtdNUMEROS.value)){
                    const numeros = randNum.randomUnicoBug();
                    for(let alea of numeros){
                        if(alea===numeros[numeros.length-1]){
                            aux += `${alea} `;
                            break;
                        }
                        aux += `${alea}, `;
                    }
                }else{
                    const numeros = randNum.randomUnico();
    
                    for(let alea of numeros){
                        if(alea===numeros[numeros.length-1]){
                            aux += `${alea} `;
                            break;
                        }
                        aux += `${alea}, `;
                    }
                }
            }else{
                const numeros = randNum.random();
                for(let alea in numeros){
    
                    if(Number(alea)===numeros.length-1){
                        aux += `${numeros[alea]} `;
                        break;
                    }
                    aux += `${numeros[alea]}, `;
                }
            }
        }
        
        resultadoContainer.classList.add('resultado-on');
        setResultado(aux);
    }
    
    function handleClick(e){
        const resultado = document.querySelector('.resultado');
        const message = document.querySelector('.message');
        message.innerHTML += 'Copiado para ??rea de transfer??ncia.';
        const numerosCopiados = resultado.innerHTML;
        navigator.clipboard.writeText(numerosCopiados);

    }

    return (
        <>
            <div className="container">

                <div className="gerador">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Menor n??mero</label>
                            <input type="number" className="numero-minimo" required></input>
                        </div>

                        <div>
                            <label>Maior n??mero</label>
                            <input type="number" className="numero-maximo" required></input>
                        </div>

                        <div>
                            <label>Quantidade de n??meros</label>
                            <input type="number" className="numeros-gerados"  required></input>
                        </div>

                        <div>
                            <label>Sem repeti????o</label>
                            <input className="checkbox numeros-unicos"  type="checkbox"></input>
                        </div>

                        <div>
                            <label >Ordem</label>
                            <select id="ordem">
                                <option value="aleatoria">Aleat??ria</option>
                                <option value="crescente">Crescente</option>
                                <option value="decrescente">Decrescente</option>
                            </select>
                        </div>
                        <button type="submit">Gerar</button>
                    </form>

                    <div className="resultado-container">
                        {gerado && 
                                    <button onClick={handleClick}>copiar</button>}
                        
                        <div className="message">

                        </div>
                        <div className="resultado">
                            {resultado}
                        </div>
                        
                    </div>
                </div>
                
            </div>

            <div className="description">
            <p>Os n??meros aleat??rios usados em computadores comuns n??o s??o verdadeiramente "aleat??rios" sendo assim, chamados de n??meros pseudo-aleat??rios, ou seja, ?? um processo que parece ser aleat??rio, mas na verdade, n??o ??. Trata-se de uma sequ??ncia de??n??meros??que ?? gerada por um algoritmo que seja intermut??vel com outra sequ??ncia verdadeiramente??aleat??ria??que ?? ent??o chamada pseudo-aleat??ria. Sendo assim, uma sequ??ncia compar??vel a uma??aleat??ria.</p>
            </div>

            <footer>
                <div className="footer"></div>
            </footer>
        </>

    );
}