// quando utilizamos a 'class' não é necessario utilizar o 'prototype' por ele ja faz isso automaticamente

class Pessoa{//'class'
   constructor(nome, sobrenome){//'constructor(){}' - passa parametros na 'class' 
this.nome = nome;
this.sobrenome = sobrenome;
   } 

   falar(){
    console.log(`${this.nome} esta falando.`);
}

comer(){
    console.log(`${this.nome} esta comendo.`);
}

beber(){
    console.log(`${this.nome} esta bebendo.`);
}

}

function Pessoa2(nome, sobrenome) {//'constructor function'
    this.nome = nome;
this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} esta falando.`); 
}

const p1 = new Pessoa('Mona', 'Garcia');
// const p2 = new Pessoa('Menito', 'Garcia');
// const p3 = new Pessoa('Mixa', 'Garcia');
// const p4 = new Pessoa('Lucy', 'Garcia');
console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

const p2 = new Pessoa2('Menito', 'Garcia');
console.log(p2);