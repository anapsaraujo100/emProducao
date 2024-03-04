import {blusa, blusa2, calca, relogio, relogio2, sapato} from "./Assets/index.js"

export const produtos = [
    {
        nome: 'Blusa Raglan Branca', 
        id: 1, 
        categoria: 'Blusa',
        src: blusa,
        valor: "70,00"
    },

    {
        nome: 'Calça Brim Azul Royal', 
        id: 2,
        categoria: 'Calça', 
        src:calca,
        valor: "70,00"
    },

    {
        nome: 'Smart Watt', 
        id: 3, 
        categoria: 'Relogio',
        src:relogio,
        valor: "270,00"
    },

    {
        nome: 'Nique Air Surf', 
        id: 4,
        categoria: 'Tênis', 
        src:sapato,
        valor: "200,00"
    },
    
    {
        nome: 'Blusa Lisa Azul', 
        id: 5,
        categoria: 'Blusa',
        src:blusa2,
        valor: "75,00"
    },

    {
        nome: 'Relógio Adidas', 
        id: 6,
        categoria: 'Relogio',
        src:relogio2,
        valor: "180,00"
    },
]