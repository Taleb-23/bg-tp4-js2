"use strict";
//lines declaraiton (slide 26)
let lignes = 0;
let total_points = 0;

//persons array creation (slide 20-21)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
//to force init (slide 17)
init();

//init code completion (slide 22)
function init() {
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

//do insert declaration (slide 24)
function doInsert(nom, prenom, points) {
    total_points += points;
    lignes++;
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

//writing in console(slide 19)
function consoleTableau() {
    console.log(persons);
}

//function declaration slide 14
function doInsertRowTable(num, nom, prenom, points) {
    //creation of the table  (slide 14)
    const table = document.getElementById("table");
    //creation of the row to add in table  (slide 14)
    const tr = document.createElement("tr");

    //creation of the number cell (slide 14)
    const td_num = document.createElement("td");
    td_num.setAttribute("class", "col_number");
    td_num.innerText = num;

        //tp notes:
        // check box is a compsent to add , to a  inner html "text a ecrire"
    //creation of the nom cell (slide 14)
    const td_nom = document.createElement("td");
    td_nom.setAttribute("class", "col_text");
    td_nom.innerText = nom;

    //creation of the prenom cell (slide 14)
    const td_prenom = document.createElement("td");
    td_prenom.setAttribute("class", "col_text");
    td_prenom.innerText = prenom;

    //creation of the points cell (slide 14)
    const td_point = document.createElement("td");
    td_point.setAttribute("class", "col_number");
    td_point.innerText = points;

    //add checkbox(slie 14)
    const td_select = document.createElement("td");
    td_select.setAttribute("class", "col_chkbox");

    const checkbox = document.createElement("input");//tp:
    checkbox.setAttribute("type", "checkbox");
    td_select.appendChild(checkbox);


    //adding the components to a row (slide 14)
    tr.appendChild(td_num);
    tr.appendChild(td_nom);
    tr.appendChild(td_prenom);
    tr.appendChild(td_point);
    tr.appendChild(td_select);

    //adding the row to the table  (slide 14)
    table.appendChild(tr);

}