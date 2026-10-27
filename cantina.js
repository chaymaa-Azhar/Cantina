
const modal = document.getElementById("modal");
const form = document.getElementById("monForm");
const btnAjouter = document.getElementById("btn_Ajouter");
const liste=document.getElementById("list");
const modalTitre=document.querySelector("#modal h3");
const btnTheme=document.getElementById("btnTheme");
//const valider=document.getElementById("btnValider");
//const annuler=document.getElementById("btnAnnuler");
let indexEnModification = null;
//const recette =JSON.parse(localStorage).getItem("recettes") || [];
const recettes=[]
let prochaineId=1;// compteur : donner nouvelle id a chaque recette
let indexEnModifiecation=null; 


// Ouvrir
btnAjouter.addEventListener("click", function () {
  indexEnModification = null;
   modalTitre.textContent = "Nouvelle recette";
  modal.hidden = false;
});

// Fermer avec Annuler
form.addEventListener("reset", function () {
  modal.hidden=true;
});

//filter
function filter(select,categorie){
  const valeurActuel=select.value 
  const recetteFilter=recettes.filter(function(recette){ // filter les recette de categorie = categorie
    return recette.categorie === categorie;
  });
  select.innerHTML= '<option value="">En réserve</option>';
  recetteFilter.forEach(function(recette){
    const option = document.createElement("option");
    option.value=recette.id;
    option.textContent=recette.nom + "(+" + recette.prix + " DH)";
    select.appendChild(option);
  });
  select.value = valeurActuel; // choix
  if(select.selectedIndex===-1){
    select.value="";
  }

  
 
};


function afficherSelects() {
  document.querySelectorAll('select[id$="-entree"]').forEach(function (select) {
    filter(select, "Entrée");
  });
  document.querySelectorAll('select[id$="-plat"]'/*endswidths*/).forEach(function (select) {
    filter(select, "Plat");
  });
  document.querySelectorAll('select[id$="-dessert"]').forEach(function (select) {
    filter(select, "Dessert");
  });



}




//afficharge dans liste 
function afficher(){
  liste.innerHTML='' //avant utiliser afficher un autre repas 
  recettes.forEach((recette, index) => {
   const cart = document.createElement('div');
   cart.className='border border-green-200 rounded-xl p-3 grid gap-2'
   cart.innerHTML=`
          <div class="flex items-center justify-between">
              <strong>${recette.nom}</strong>
              <span>${recette.prix} DH</span>
           </div>
      <div class="flex gap-2">
            <span class="text-xs px-2 py-0.5 rounded-full bg-green-100">${recette.categorie}</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-green-100">${recette.badge}</span>
         </div>
        <div class="flex gap-2">
           <button type="button" class="btn-modifier text-sm px-2 py-1 rounded-lg border border-green-300 hover:bg-green-100">Modifier</button>
           <button type="button" class="btn-supprimer text-sm px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700">Supprimer</button>
        </div>
        `
        // Modifier la recette
    cart.querySelector(".btn-modifier").addEventListener("click", function () {
      //regle pas modifier recette dans le projet 
      if(recette.jour !== null){
        alert("tu ne peut pas modifier")
        return;
      }
    indexEnModification = index;
    modalTitre.textContent = "Modifier la recette";
    document.getElementById("nom").value = recette.nom;
    document.getElementById("categorie").value = recette.categorie;
    document.getElementById("prix").value = recette.prix;
    document.getElementById("badge").value = recette.badge;
    modal.hidden = false;
  });

  // Supprimer la recette
    cart.querySelector('.btn-supprimer').addEventListener("click", function () {
      if(confirm("Voulez-vous supprimer cette recette ?")){
      recettes.splice(index, 1);
       afficher();}
  });
      liste.appendChild(cart);
      //assigne trasparent text
      if(recette.jour !== null){
        cart.style.opacity = '0.5';
      }
  });
  afficherSelects()
}



// button Valider
form.addEventListener("submit", function (e) {
   e.preventDefault();//pas refrecher la page 
   

  if (indexEnModification === null) {
    recettes.push({
      id:prochaineId++,
      jour:null,
      nom:document.getElementById('nom').value,
      categorie:document.getElementById('categorie').value,
      prix:Number(document.getElementById('prix').value),
      badge:document.getElementById('badge').value,
    });                     
  } else {
        const r=recettes[indexEnModification]
        r.nom = document.getElementById("nom").value;
        r.categorie = document.getElementById("categorie").value;
        r.prix = Number(document.getElementById("prix").value);
        r.badge = document.getElementById("badge").value;
  }         
  form.reset();     // kay-fermer l'modal
  afficher();


});



//activer dark mood button
btnTheme.addEventListener("click",function(){
  document.body.classList.toggle("dark");
});

// Affichage initial
afficher();







