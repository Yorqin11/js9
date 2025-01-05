const namePr = prompt("Ismingizni kiriting");
const surnamePr = prompt("Familyangizni kiiting");
const agePr = prompt("Yoshingizni kiriting");

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age"); 

name.textContent = namePr;
surname.textContent = surnamePr;
age.textContent = agePr;

const caseChoice = prompt("Ismingiz katta harf yoki kichikligini tanlang\n1) Katta\n2) Kichik");

let formattedName;
if (caseChoice === "1") {
    formattedName = namePr.toUpperCase();
} else if (caseChoice === "2") {
    formattedName = namePr.toLowerCase();
} else {
    formattedName = namePr; 
}

name.textContent = formattedName;
surname.textContent = surnamePr;
age.textContent = agePr;