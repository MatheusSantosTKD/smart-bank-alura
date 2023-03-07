import { 
    fundoClaro, 
    conteudoClaro, 
    textoFundoClaro,
    fundoEscuro, 
    conteudoEscuro, 
    textoEscuro } from './variaveis';

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: ''
};

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text : textoEscuro,
    filter: "invert(100%)"
};