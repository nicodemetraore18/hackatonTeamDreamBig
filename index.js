
// head welcome sentence
let headtxt1="LA  SANTE  AVANT  TOUT";
head = document.getElementById('head');
head.style.color="white"
	
hour=document.createElement("div");
hour.setAttribute("id","hour")
head.appendChild(hour);


phrase=document.createElement("div");
phrase.setAttribute("id","phrase")

h1=document.createElement("h1");
h1.setAttribute("class","titreh1")
phrase.appendChild(h1)




head.appendChild(phrase);

var si;

var Id0=setTimeout(event1,1000);
//------------------------------
function event1() {
let i=0;
	Id=setInterval(function(){
      char=document.createTextNode(headtxt1.charAt(i));
		h1.appendChild(char)
		i++;	
		

 }, 200);
    

}
//------------------------------------


let Id2=setTimeout(event2,5650)
 function event2(){
 	 div=document.createElement("div");
 	 h2=document.createElement('h2')
 	 h2.setAttribute('id','h2')
    div.setAttribute("id","titreh2")
 	let txt=document.createTextNode("PRENEZ SOIN DE VOUS");
	h2.appendChild(txt);
	div.appendChild(h2)

	icon=document.createElement("span");
	icon.setAttribute("id","span")
		icone=document.createElement("i");


icon.appendChild(icone)

div.appendChild(icon)

icone.setAttribute("class","fa-solid fa-arrow-down-long annim");

dc=document.createElement("div")

dc.setAttribute("class","lien")
dclb=document.createElement('strong');
dcl=document.createElement('a');
dclb.appendChild(dcl)
dcl.setAttribute("href","produits.html")
dcl.setAttribute("target","_blank")


dclt=document.createTextNode("DECOUVRIR PLUS");
dcl.appendChild(dclt);
dc.appendChild(dcl)

head.appendChild(div)
head.appendChild(dc)



}



	


  
//*********************************************
  
//**********************************************
setTimeout(event3,10);
function event3() {
setInterval(function(){

        let d = new Date();
        hour.innerHTML = d.toLocaleTimeString();
    }, 1000);
}
	





// content
//BIENVENU SUR "SANTE POUR TOUS" . Ce site vous presente des aliments naturels à vertus thérapeutique  facilments accessible qui vous permettront d'ameliorer votre santé
            		//cliquez ici pour decouvrir
 content=document.getElementById("content")       	
let contentxt1=document.createTextNode("BIENVENU SUR 'SANTE POUR TOUS'");
let contentxt2=document.createTextNode("Ce site vous presente des aliments naturels à vertus thérapeutique  facilments accessible qui vous permettront d'ameliorer votre santé");
divcontent=document.createElement("div");
divcontent.setAttribute("id","divcontent");





//

	



