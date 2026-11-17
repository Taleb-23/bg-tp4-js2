"use strict";

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