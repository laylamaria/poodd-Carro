export class Carro{
    gas: number;
    gasMax: number;
    pass: number;
    passMax: number;
    km: number;

    constructor(){
        this.gas= 0;
        this.gasMax= 10;
        this.pass= 0;
        this.passMax= 2;
        this.km= 0;
    }
    show():string{
        let s: string= "";
        s+= "pass: " + this.pass + ", gas: " + this.gas + ", km: " + this.km;
        return s;
    }
    entrar():void{
        if (this.pass >= this.passMax){
            console.log("Quantidade de passageiros excedida");
        }else{
            this.pass+=1;
        }
    }
    sair():void{
        if (this.pass <= 0){
            console.log("Nenhum passageiro no veículo.");
        }else{
            this.pass-=1;
        }
    }
    abastecer(litro:number):void{
        this.gas+=litro;
        if (this.gas > this.gasMax){
            this.gas=this.gasMax;
        }
    }
    andar(distancia:number):void{
        if(this.pass >= 1 && this.gas >= distancia/10 ){
            this.km+=distancia;
            this.gas-=distancia/10;
        }else{
            console.log("Nao ha passageiros ou nao a gasolina no veiculo");
        }
    }
}


