let userYear = prompt("Вкажіть рік народження");
let city = prompt("Вкажіть місто в якому Ви живете");
let sport = prompt(
  "Вкажіть Ваший улюбленний вид спорту з представленних: Шахи, Настільний теніс, Армреслінг"
);

if (!userYear) {
  res = "Шкода, що Ви не захотіли ввести свій рік народження";
} else {
  let currentYear = new Date().getFullYear();
  var res = currentYear - userYear;
  res = `Тобі  ${res} р`;
}

if (!city) {
  city = "Шкода, що Ви не захотіли ввести своє місто";
} else if (city === "Київ") {
  let cap = "Ти живеш у столиці ";
  city = cap + "України";
} else if (city === "Вашингтон") {
  city = cap + "США";
} else if (city === "Лондон") {
  city = cap + "Англії";
} else {
  city = "Ти живеш у місті " + city;
}

if (!sport) {
  sport = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту";
} else {
  if (sport == "Шахи") {
    let kinds = "Магнус Карлсен";
    sport = "Круто! Хочеш стати як " + kinds;
  } else if (sport == "Настільний теніс") {
    kinds = "Іван Май";
    sport = "Круто! Хочеш стати як " + kinds;
  } else if (sport == "Армреслінг") {
    kinds = "Олег Жох";
    sport = "Круто! Хочеш стати як " + kinds;
  } 
}

alert(`
${res} 
${city}
${sport}
`)
