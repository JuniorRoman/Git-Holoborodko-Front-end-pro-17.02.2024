let userYear = prompt("Вкажіть рік народження");
let city = prompt("Вкажіть місто в якому Ви живете");
let sport = prompt(
  "Вкажіть Ваший улюбленний вид спорту з представленних: Шахи, Настільний теніс, Армреслінг"
);

let cityUa = "України";
let cityUSA = "США";
let cityUk = "Великобританії";
let cap = "Ти живеш у столиці ";
let cit = "Ти живеш у місті ";

let currentYear = new Date().getFullYear();
let res = currentYear - userYear;

switch (true) {
  case userYear === null:
  case userYear.trim() === "":
    res = "Шкода, що Ви не захотіли ввести свій рік народження ";
    break;
  case userYear != "":
    res = `Тобі  ${res} р`;
}

switch (true) {
  case city === null:
  case city.trim() === "":
    city = "Шкода, що Ви не захотіли ввести своє місто";
    break;
  case city != "":
    if (city === "Київ") {
      city = cap + cityUa;
    } else if (city === "Вашингтон") {
      city = cap + cityUSA;
    } else if (city === "Лондон") {
      city = cap + cityUk;
    } else {
      city = cit + city;
    }
}

switch (sport) {
  case "Шахи":
    sport = "Круто! Хочеш стати як " + "Магнус Карлсен";
    break;
  case "Настільний теніс":
    sport = "Круто! Хочеш стати як " + "Іван Май";
    break;
  case "Армреслінг":
    sport = "Круто! Хочеш стати як " + "Олег Жох";
    break;
}

alert(`${res} \n${city} \n ${sport}`);
