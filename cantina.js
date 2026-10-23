/*
const dialogue = document.querySelector("dialog");
const form = document.getElementById("monForm");
//  boutons "Ajouter une recette"
const btnAjouter = document.getElementById("btn_Ajouter");


// Ouvrir le dialog
btnAjouter.addEventListener("click", function () {
  dialogue.showModal();
});

// Fermer avec Annuler
form.addEventListener("reset", () => {
  dialogue.close();
});

// Valider le formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault(); // empêche le rechargement de la page

  const recette = {
    nom: document.getElementById("nom").value,
    categorie: document.getElementById("categorie").value,
    prix: Number(document.getElementById("prix").value),
    badge: document.getElementById("badge").value,
  };                                                                                                                             

  console.log(recette); // pour tester, ensuite tu l'ajoutes à la réserve

  dialogue.close();
});*/
const modal = document.getElementById("modal");
const form = document.getElementById("monForm");
const btnAjouter = document.getElementById("btn_Ajouter");
const liste=document.getElementById("list");
//const modifier=document.getElementById("modifier");
//const supprimer=document.getElementById("supprimer");
//const valider=document.getElementById("btnValider");
//const annuler=document.getElementById("btnAnnuler");

const recettes=[]
// Ouvrir
btnAjouter.addEventListener("click", function () {
    modal.hidden = false;
});

// Fermer avec Annuler
form.addEventListener("reset", function () {
  modal.hidden=true;
});
function afficher(recette){
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
           <button type="button" class="text-sm px-2 py-1 rounded-lg border border-green-300 hover:bg-green-100">Modifier</button>
           <button type="button" class="text-sm px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700">Supprimer</button>
        </div>
        `
         liste.appendChild(cart);
           
}

// Valider
form.addEventListener("submit", function (e) {
   e.preventDefault();//pas refrecher la page 
  //form.classList.toggle('hidden')
  const recette= {
    nom: document.getElementById("nom").value,
    categorie: document.getElementById("categorie").value,
    prix: Number(document.getElementById("prix").value),
    badge: document.getElementById("badge").value,
  };
  recettes.push(recette)
  afficher(recette)
  form.reset()

  // form.reset() kay-déclenchi event "reset" li kay-khbbi l-modal
 
});






