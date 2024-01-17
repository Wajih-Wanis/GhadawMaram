function addAbonnee() {
    var abonnee = {
        cin: $("input[name='cin']").val(),
        nom: $("input[name='nom']").val(),
        prenom: $("input[name='prenom']").val(),
        adresse: $("input[name='adresse']").val(),
        telephone: $("input[name='telephone']").val(),
        livre_emp: $("input[name='livre_emp']").val()
    };

    var abonnees = JSON.parse(sessionStorage.getItem("abonnees")) || [];
    abonnees.push(abonnee);
    sessionStorage.setItem("abonnees", JSON.stringify(abonnees));

    displayAbonnees();
}

function deleteAbonnee() {
    var cinToDelete = $("input[name='cin']").val();
    var abonnees = JSON.parse(sessionStorage.getItem("abonnees")) || [];
    var updatedAbonnees = abonnees.filter(function(abonnee) {
        return abonnee.cin !== cinToDelete;
    });

    sessionStorage.setItem("abonnees", JSON.stringify(updatedAbonnees));
    displayAbonnees();
}

function displayAbonnees() {
    var abonnees = JSON.parse(sessionStorage.getItem("abonnees")) || [];
    var tableBody = $("#abonneeTable");
    tableBody.empty();

    for (var i = 0; i < abonnees.length; i++) {
        var abonnee = abonnees[i];
        var row = "<tr><td>" + abonnee.cin + "</td><td>" + abonnee.nom + "</td><td>" + abonnee.prenom + "</td><td>"
            + abonnee.adresse + "</td><td>" + abonnee.telephone + "</td><td>" + abonnee.livre_emp + "</td></tr>";
        tableBody.append(row);
    }
}

function addLivre() {
    var livre = {
        num: $("input[name='num']").val(),
        titre: $("input[name='titre']").val(),
        nom_auteur: $("input[name='nom_auteur']").val(),
        date_rea: $("input[name='date_rea']").val(),
        nom_emp: $("input[name='nom_emp']").val()
    };

    var livres = JSON.parse(sessionStorage.getItem("livres")) || [];
    livres.push(livre);
    sessionStorage.setItem("livres", JSON.stringify(livres));

    displayLivres();
}

function deleteLivre() {
    var numToDelete = $("input[name='num']").val();
    var livres = JSON.parse(sessionStorage.getItem("livres")) || [];
    var updatedLivres = livres.filter(function(livre) {
        return livre.num !== numToDelete;
    });

    sessionStorage.setItem("livres", JSON.stringify(updatedLivres));
    displayLivres();
}

function displayLivres() {
    var livres = JSON.parse(sessionStorage.getItem("livres")) || [];
    var tableBody = $("#livreTable");
    tableBody.empty();

    for (var i = 0; i < livres.length; i++) {
        var livre = livres[i];
        var row = "<tr><td>" + livre.num + "</td><td>" + livre.titre + "</td><td>" + livre.nom_auteur +
            "</td><td>" + livre.date_rea + "</td><td>" + livre.nom_emp + "</td></tr>";
        tableBody.append(row);
    }
}

function addFiche() {
    var fiche = {
        id: $("input[name='id']").val(),
        date_emprunt: $("input[name='date_emprunt']").val(),
        date_retour: $("input[name='date_retour']").val(),
        abonnee_cin: $("select[name='abonnee']").val(),
        livre_num: $("select[name='livre']").val()
    };

    var fiches = JSON.parse(sessionStorage.getItem("fiches")) || [];
    fiches.push(fiche);
    sessionStorage.setItem("fiches", JSON.stringify(fiches));

    displayFiches();
}

function deleteFiche() {
    var idToDelete = $("input[name='id']").val();
    var fiches = JSON.parse(sessionStorage.getItem("fiches")) || [];
    var updatedFiches = fiches.filter(function(fiche) {
        return fiche.id !== idToDelete;
    });

    sessionStorage.setItem("fiches", JSON.stringify(updatedFiches));
    displayFiches();
}

function displayFiches() {
    var fiches = JSON.parse(sessionStorage.getItem("fiches")) || [];
    var tableBody = $("#ficheTable");
    tableBody.empty();

    for (var i = 0; i < fiches.length; i++) {
        var fiche = fiches[i];
        var row = "<tr><td>" + fiche.id + "</td><td>" + fiche.date_emprunt + "</td><td>" + fiche.date_retour +
            "</td><td>" + fiche.abonnee_cin + "</td><td>" + fiche.livre_num + "</td></tr>";
        tableBody.append(row);
    }
}

function populateDropdowns() {
    var abonnees = JSON.parse(sessionStorage.getItem("abonnees")) || [];
    var livres = JSON.parse(sessionStorage.getItem("livres")) || [];
    var abonneeDropdown = $("select[name='abonnee']");
    var livreDropdown = $("select[name='livre']");

    abonneeDropdown.empty();
    livreDropdown.empty();

    for (var i = 0; i < abonnees.length; i++) {
        var abonnee = abonnees[i];
        abonneeDropdown.append("<option value='" + abonnee.cin + "'>" + abonnee.cin + "</option>");
    }

    for (var j = 0; j < livres.length; j++) {
        var livre = livres[j];
        livreDropdown.append("<option value='" + livre.num + "'>" + livre.num + "</option>");
    }
}

$(document).ready(function() {
    displayAbonnees();
    displayLivres();
    displayFiches();
    populateDropdowns();
});
