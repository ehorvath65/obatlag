console.log("Hello");
const adatok = [
  [
    10, 10, 10, 9, 10, 10, 9, 10, 10, 9, 10, 9, 9, 10, 10, 10, 9, 10, 9, 10, 9,
    8, 9, 10, 10, 10, 10, 9, 8, 10, 9, 9, 9, 9, 9, 10, 10, 10, 10, 9, 10, 9, 10,
    10, 9, 9, 10, 10, 10, 10, 9, 10, 10, 9, 9, 10, 10, 10, 9, 10, 10, 9, 10, 10,
    10, 8, 9, 10, 9, 8, 9, 10, 9, 10, 9, 9, 8, 9, 10, 9,
  ],
  [
    9, 8, 9, 8, 9, 9, 8, 10, 8, 9, 10, 8, 9, 10, 9, 8, 9, 9, 8, 10, 9, 7, 9, 9,
    10, 9, 8, 9, 8, 10, 9, 8, 9, 9, 8, 10, 9, 9, 8, 8, 9, 8, 9, 9, 9, 9, 10, 10,
    9, 9, 9, 9, 9, 9, 9, 10, 8, 9, 8, 10, 8, 9, 10, 9, 9, 7, 8, 9, 8, 8, 9, 9,
    9, 10, 9, 9, 8, 9, 6, 9,
  ],
  [
    8, 8, 8, 5, 8, 8, 8, 9, 7, 7, 8, 6, 8, 8, 6, 8, 9, 9, 6, 8, 9, 7, 8, 8, 10,
    8, 4, 5, 8, 9, 8, 8, 8, 7, 6, 10, 9, 8, 8, 7, 7, 8, 8, 6, 8, 7, 8, 9, 8, 9,
    7, 8, 9, 1, 6, 10, 2, 7, 8, 9, 6, 8, 8, 9, 9, 7, 8, 9, 7, 7, 9, 9, 8, 9, 9,
    8, 7, 9, 6, 8,
  ],
];

let sorozatok = [];
let sorozatOsszeg = 0;

for (let i = 0; i < adatok[0].length; i++) {
  sorozatOsszeg = adatok[0][i] + adatok[1][i] + adatok[2][i];
  //console.log(sorozatOsszeg)
  sorozatok.push(sorozatOsszeg);
}

console.log(sorozatok);

sorozatok.forEach((sorozat) => console.log(sorozat));

sorozatok.forEach(function (sorozat) {
  console.log(sorozat);
});
