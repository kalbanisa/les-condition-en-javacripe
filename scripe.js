function afficherCategorie() {
    const age = document.getElementById('ageInput').value;
    let categorie;

    if (age < 0) {
        categorie = "Âge invalide";
    } else if(age < 6){
        categorie = "Trop jeune "
    }
     else if (age <= 12) {
        categorie = "Enfant";
    } else if (age <= 17) {
        categorie = "Adolescent";
    } else if (age <= 64) {
        categorie = "Adulte";
    } else {
        categorie = " Aînés";
    }

    document.getElementById('categorie').innerText = `Vous êtes dans la catégorie : ${categorie}`;
}
