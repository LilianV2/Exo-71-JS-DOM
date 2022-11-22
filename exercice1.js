let monDiv = document.createElement('div');
let monDiv2 = document.createElement('div');
let viewP = document.getElementById('viewport');

document.getElementById('viewport').appendChild(monDiv);

monDiv.innerHTML = "Ce div a été ajouté en utilisant js";

viewP.appendChild(monDiv2);

monDiv2.style.backgroundColor = "red";
monDiv2.style.width = "100px";
monDiv2.style.height = "100px";

document.getElementById('aSupprimer').remove();










