/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

console.log("-------Vartotojų amžiaus vidurkis-------");
let agesSum = 0;

function getUserAverageAge(users) {
  for (let i = 0; i < users.length; i++) {
    let allAges = users[i].age;

    agesSum += allAges;
  }

  let ageAverage = agesSum / users.length;
  console.log(ageAverage);
}

getUserAverageAge(users);

console.log("-------Vartotojų vardų masyvas-------");

let namesArray = [];

function getUsersNames(users) {
  for (let i = 0; i < users.length; i++) {
    let allNames = users[i].name;
    console.log(allNames);
    namesArray.push(allNames);
  }
  console.log(namesArray);
}

getUsersNames(users);
