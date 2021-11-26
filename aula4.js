// quando não utilizamos a palavra 'new' o 'construtor(){}' não é chamado ou seja não teremos acesso a nenhum dado que tiver dentro do 'construtor' ex. 'ControleRemoto.trocaPilha();'

function teste() {
    console.log('este é meu teste');
    // console.log(this);
}

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume(){
        this.volume += 2;
      
    }

    diminuirVolume(){
         this.volume -= 2;
        
    }

    static soma(x, y){
        return x + y;
        // return this;
        // console.log(this);
    }

    // trocaPilha(){// Metodo de instancia

    // }

  static trocaPilha(){// Metodo estatico
console.log('ok, vou trocar');
    }
}

const controle1 = new ControleRemoto('LG');

// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();

// // controle1.trocaPilha(); não vai funcionar porque 'trocaPilha();' é estatico, so vai funciona se utilizarmos a funcão como esta na alinea abaixo
// ControleRemoto.trocaPilha();
// console.log(controle1);

console.log(ControleRemoto.soma(2, 4));
// ControleRemoto.soma();