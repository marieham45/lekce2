document.body.innerHTML += "<h1>Příjem divadla</h1>";

const cenaListku = 12;
const prumernyPocetDivaku = 174;
const pocetPredstaveni = 15;

const prijem = pocetPredstaveni * prumernyPocetDivaku * cenaListku;

document.body.innerHTML += "<p>Příjem divadla: " + prijem + " EUR.</p>";

const cenaListkuStudent = cenaListku * 0.65;
const pocetStudentuNaPredstaveni = prumernyPocetDivaku * 0.4;
const pocetNestudentuNaPredstaveni = prumernyPocetDivaku * 0.6;

const prijemSeStudentskouSlevou =
  pocetPredstaveni * pocetNestudentuNaPredstaveni * cenaListku +
  pocetPredstaveni * pocetStudentuNaPredstaveni * cenaListkuStudent;

document.body.innerHTML +=
  "<p>Příjem divadla se studentskou slevou: " +
  Math.ceil(prijemSeStudentskouSlevou) +
  " EUR.</p>";

document.body.innerHTML += "<h1>Hod kostkou</h1>";

const hodKostkou = Math.ceil(Math.random() * 6);
/*
Jak to funguje?
- Math.random() vrací desetinné číslo od 0 do 1, např. 0.568756412
- tento výsledek vynásobíme 6, dostaneme tedy čísla od 0.0000000000 do 5.999999999
- tento výsledek zaokrouhlíme pomocí Math.ceil nahoru, dostaneme tedy čísla od 1 do 6
*/

document.body.innerHTML += "<p>Hozeno: " + hodKostkou + "</p>";

//test různých čísel - padnou všechny možnosti od 1 do 6?
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
document.body.innerHTML +=
  "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>";
