content = document.getElementById('content');
var h1=document.createElement("h1");
h1.setAttribute("id","h1bienvenu")
content.appendChild(h1)

let bienvenu= setTimeout(SayHello, 1000);


function SayHello() {
let bienvenuPhrase="HEALTH BEFOR ANYTHINGS";
let start=setnterval(affiche,1000);




function affiche() {
	for (let i=0; i<bienvenuPhrase.length; i++){
   let char =document.createTextNode(bienvenuPhrase.charAt(i)) ;
   h1.appendChild(char)
}
}
	



}