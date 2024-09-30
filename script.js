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
