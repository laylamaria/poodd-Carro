import {Carro} from "./Carro";
declare function require(name:string):any;
var readline=require('readline-sync');

let carro: Carro= new Carro();
let opc: string= "";

while(true){
   let opcoes: string = "" + "show: para mostrar o status do seu veiculo\n" +
    "entrar: para um passeiro entrar no veiculo \n" +
    "sair: para um passeiro sair do veiculo \n" +
    "abastecer: para abastecer o veiculo \n" +
    "andar: para o veiculo se mover\n" +
    "parar: para o programa\n" ;
    console.log(opcoes);
    opc=readline.question("Digite a opcao:");
    if (opc=="parar"){
        console.log("Ate a proxima!");
        break;
    }
    switch(opc){
 
        case "show":
        console.log(carro.show());
        break;

        case "entrar":
        carro.entrar();
        break;

        case "sair":
        carro.sair();
        break;

        case "abastecer":
        let litro:number = parseFloat(readline.question("Digite a quantidade de litros:"));
        carro.abastecer(litro);
        break;

        
        case "andar":
        let distancia:number = parseFloat(readline.question("Digite a distacia a percorrer:"));
        carro.andar(distancia);
        break;

        default:
        console.log("Opcao Invalida");
        
    }
 }
