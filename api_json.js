/*
API JS que vai ler JSON
*/
$.getJSON("frases.json", function(json){

class soma{
	constructor(anime, anime2){
		this.ani = anime;
		this.anim = anime2;
	}
	 get valor(){
	 return this.ani + this.anim;
		}
	
    };
    //Fairy Tail e Dragon Ball
 let somaPC = new soma(json.ferias[0].valor, json.transporte[0].valor);
 let somaPA = new soma(json.ferias[0].valor, json.transporte[1].valor);
 let somaPV = new soma(json.ferias[0].valor, json.transporte[2].valor);
//ilha e transportes
 et somaCV = new soma(json.ferias[2].valor, json.transporte[2].valor); 
let somaIC = new soma(json.ferias[1].valor, json.transporte[0].valor);
 l
//Praia e transportes
 let
  document.getElementById("CA").innerHTML = somaCA.valor;
  
})