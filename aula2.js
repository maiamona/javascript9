let _velocidade = Symbol('velocidade');// Symbol - cria uma chave privada dentro do seu objeto, utilizamos o 'Symbol' sem utilizarmos a palavra reservada 'new'

// um 'Symbol' nunca vai ser igual ao outro 'Symbol', ex. '(Symbol() === Symbol()) => return false'

class Carro{

    constructor(nome){
this.nome = nome;
// this.velocidade = 0;
this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER');
if(typeof valor !== 'number') return;
if(valor >= 100 || valor <= 0) return;
this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;//o carro vai acelerar ate chegar na velocodade >= 100
        // this.velocidade++;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;//o carro vai freiar ate chegar na velocodade <= 0
        // this.velocidade--;
        this[_velocidade]--;
    } 
}

const c1 = new Carro('Fusca');

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar();  
// }

// console.log(c1);

// CTRL + Shift + L => seleciona todos os caracters iguais no visual code

c1.velocidade = 55;//SETTER
 console.log(c1.velocidade);//GETTER

 class Pessoa{
     constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
     }

     get nomeCompleto(){
         return this.nome + ' ' + this.sobrenome;
     }

    //  nomeCompleto(){
    //      return this.nome + ' ' + this.sobrenome;
    //  }

    set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    }
 }

 const p1 = new Pessoa('Luiz', 'Miranda');
 p1.nomeCompleto = 'Luiz Miranda Oliveira';
 console.log(p1.nome);
 console.log(p1.sobrenome);
 console.log(p1.nomeCompleto);
//  console.log(p1.nomeCompleto());