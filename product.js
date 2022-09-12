let headtxt1="VOICI  UNE  SELECTION  DE  COMPLEMENTS  ALIMENTAIRE  QUI  VONT  BOOSTER  VOTRE  SYSTEME  IMMUNITAIRE";
head = document.getElementById('head');
head.style.color="white"

phrase=document.createElement("div");
phrase.setAttribute("id","phrase")

h1=document.createElement("h1");
h1.setAttribute("class","titreh1")
phrase.appendChild(h1)

head.appendChild(phrase);

var Id0=setTimeout(event1,100);
//------------------------------
function event1() {
let i=0;
	Id=setInterval(function(){
      char=document.createTextNode(headtxt1.charAt(i));
		h1.appendChild(char)
		i++;	
		

 }, 90);
    

}

//--------------------- PRODUCT--------------------------------------------------

var listeProduit=[
 prod1={
nom:"L'eau",
description:"L'eau est le constituant le plus important du corps humain : en moyenne elle constitue 60 % du poids total de notre corps.La teneur en eau des différents organes varie de 83 % pour le sang à 10 % pour le tissu adipeux.",
image:"1.jpeg",
lien:"https://www.passeportsante.net/fr/Actualites/Dossiers/DossierComplexe.aspx?doc=10-bienfaits-eau-sante"
   },
   prod2={
nom:"Le beurre de karite",
description:"Riche en vitamine A, le beurre de karité apporte de l'élasticité à l'épiderme. Grâce à son action sur la souplesse et l'élasticité de la peau, il permet de prévenir l'apparition des vergetures, que ce soit à la grossesse ou à l'adolescence par exemple. Le beurre de karité est un très bon cicatrisant.",
image:"2.jpeg",
lien:"https://karethic.com/bienfaits-beurre-de-karite/"

   
   },
   prod3={
nom:"La petite cola",
description:"La noix de petit-cola fait partir des aliments qui d'une part soulagent les maladies bucco-dentaires et d'autre part rafraîchissent l'haleine. ",
image:"3.jpeg",
lien:"https://www.agrobenin.com/bonnes-raisons-manger-consommer-petit-cola-sante/"

   
   },
   prod4={
nom:"Le miel",
description:"Les bienfaits du miel sont nombreux: non seulement il relève le goût des aliments, mais il aide à garder une peau éclatante",
image:"4.jpeg",
lien:"https://www.secretsdemiel.com/apitherapie/les-bienfaits-du-miel/"

   },
   prod5={
nom:"le Moringa",
description:"Le Moringa previent notamment des maladies courantes comme la tension artérielle et d'autres liées au parasite à savoir les amibiases et les helminthiases",
image:"5.jpeg",
lien:"https://www.naturaforce.com/tout-savoir-sur-les-vitamines/complements-multivitamines/moringa/"

   
   },
   prod6={
nom:"les noix de cajoux",
description:"Excellente source de lipides mono-insaturés ;Haute teneur en vitamines et minéraux ;",
image:"6.jpeg",
lien:"https://www.consoglobe.com/noix-de-cajou-bienfaits-consommation-cg"

   
   },
    prod7={
nom:"L'aoes Verra",
description:"L'aloe vera est une plante surprenante et unique en son genre. ",
image:"7.jpeg",
lien:"https://www.naturaforce.com/bienfaits-complements/aloe-vera/"

   
   },
    prod8={
nom:"Le gingimbre",
description:"Vertus anti-inflammatoires ; Soulage les troubles digestifs ; Favorise la santé cardiovasculaire ; Très peu calorique",
image:"8.jpeg",
lien:"https://www.famillemary.fr/gingembre-bienfaits-famille-mary"


   
   }


];
 


corps=document.body;
div1=document.createElement("div");
div1.setAttribute("class","container")
corps.appendChild(div1)

//---------------------------------------
for(let i of listeProduit){
div2=document.createElement("div");
div2.setAttribute("class","responsive")
div1.appendChild(div2)

div3=document.createElement("div");
div3.setAttribute("class","gallery")
div2.appendChild(div3)


a=document.createElement("a");
a.setAttribute("target","_blank")
a.setAttribute("href",i.image)
div3.appendChild(a)


img=document.createElement("img");
img.setAttribute("src",i.image)
img.setAttribute("alt",i.nom)
a.appendChild(img)



div4=document.createElement("div");
div4.setAttribute("class","desc")
div3.appendChild(div4)
console.log("p")


titre=document.createElement("h3");
titre.setAttribute("class","titre")
div4.appendChild(titre)
console.log("p")

ti=document.createTextNode(i.nom)
titre=document.createElement("h3");
titre.setAttribute("class","titre")
titre.appendChild(ti);
div4.appendChild(titre)

pi=document.createTextNode(i.description.slice(0,20))
p=document.createElement("p");
p.setAttribute("class","pdesc")
p.appendChild(pi)

plus=document.createTextNode("... plus")
pl=document.createElement("a");

pl.setAttribute("href",i.lien)
pl.appendChild(plus)
p.appendChild(pl)

div4.appendChild(p)



}





