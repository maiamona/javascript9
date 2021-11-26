// extends => erda ou Herança

class DispositoEletronico{
   constructor(nome){
this.nome = nome;
this.ligado = false;
   } 

   ligar(){
if(this.ligado){// se 'this.ligado = true;'
    console.log(`${this.nome} ja ligado`);
    return;
}

this.ligado = true;
   }

   desligar(){
    if(!this.ligado){
        console.log(`${this.nome} ja desligado`);
        return;
    }
    
    this.ligado = false;
       }
}

// const d1 = new DispositoEletronico('Telefone');
// d1.ligar();
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

class Smartphone extends DispositoEletronico{
constructor(nome, cor, modelo){
    super(nome);// chama tudo que estiver no 'constructor(nome){"_"}' da sua classe pai ou seja => 'class DispositoEletronico{}', devemos sempre utilizar o 'super()' sempre que utilizamos o 'extends'
    this.cor = cor;
    this.modelo = modelo;
}
}

class Tablet extends DispositoEletronico{
   constructor(nome, temWifi) {
       super(nome);
       this.temWifi = temWifi;
   }

   ligar(){
       console.log('Olha, voce alterou o metodo ligar');
   }

   falaOi(){
       console.log('Oi');
   }
}

const s1 = new Smartphone('Iphone', 'Preto', 'iphone-plus');
// s1.ligar();
// s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
// console.log(t1.ligado);

t1.ligar();
t1.ligar();
t1.falaOi();