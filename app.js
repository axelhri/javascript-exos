// 1

// console.log("Bonjour monde !");

// 2

// const prenom = "axel";
// function greet() {
//   return `Bonjour, ${prenom}`;
// }

// console.log(greet());

// 3

// function trois(year) {
//   const currentyear = 2017;
//   return currentyear - year;
// }

// console.log(trois(2000));

// 4

// function trois(year) {
//   const currentyear = +100;
//   return currentyear + year;
// }

// console.log(trois(2000));

// 5

// function cinq(number) {
//   for (let i = 0; i < number; i++) {
//     console.log(`Salut, ça farte ?`);
//   }
// }

// cinq(5);

// 6

// function six(number) {
//   for (let i = 0; i < number - 1; i++) {
//     console.log(`Bonjour toi !`);
//   }
// }
// six(10);

// 7

// function sept(number) {
//   for (let i = 0; i < number; i++) {
//     console.log(`jour ${i}`);
//   }
// }

// sept(40);

// 8

// function huit(number) {
//   for (let i = number; i >= 0; i--) {
//     console.log(`compte à rebours ${i}`);
//   }
// }

// huit(8);

// 9

// function neuf(birthyear) {
//   for (let i = 2000; i < 2024; i++) {
//     console.log(`année ${i}`);
//   }
// }

// neuf(2000);

// 10

// function dix(birthyear) {
//   for (let i = birthyear; i <= 2024; i++) {
//     const age = i - birthyear;
//     console.log(`année ${i} : age ${age}`);
//   }
// }

// dix(2000);

// 11

// function onze(age) {
//   for (let i = 0; i <= age; i++) {
//     let pastyears = age - i;
//     console.log(`Il y a ${pastyears} ans, tu avais ${i} ans.`);
//   }
// }

// onze(24);

// 12

// function douze(age) {
//   for (let i = 0; i <= age; i++) {
//     let pastyears = age - i;
//     console.log(`Il y a ${pastyears} ans, tu avais ${i} ans.`);
//     if (pastyears === age / 2) {
//       console.log(`${i} moitié`);
//     }
//   }
// }
// const age = 24;
// douze(24);

// 13

// const tab = [];

// function tableau() {
//   for (let i = 1; i <= 50; i++) {
//     console.log(`john.doe.01@gmail.com ${i}`);
//   }
// }

// tableau();

// 14

// const tab = [];

// function tableau() {
//   for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//       {
//         console.log(`john.doe.${i}@gmail.com ${i}`);
//       }
//     }
//   }
// }

// tableau();

// 15

// function afficherPyramideDescendante(n) {
//   if (n < 1 || n > 25) {
//     console.log();
//     return;
//   }
//   for (let i = 1; i <= n; i++) {
//     let sapin = "";
//     for (let j = 1; j <= i; j++) {
//       sapin += "#";
//     }
//     console.log(sapin);
//   }
// }

// 16

// function afficherPyramideAscendante(n) {
//   if (n < 1 || n > 25) {
//     console.log();
//     return;
//   }
//   for (let i = 1; i <= n; i++) {
//     let sapin = "";
//     for (let j = 1; j <= n - i; j++) {
//       sapin += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//       sapin += "#";
//     }
//     console.log(sapin);
//   }
// }

// 17

// function afficherPyramideExpert(n) {
//   if (n < 1 || n > 25) {
//     console.log();
//     return;
//   }

//   for (let i = 1; i <= n; i++) {
//     let sapin = "";

//     for (let j = 1; j <= n - i; j++) {
//       sapin += "";
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//       sapin += "#";
//     }
//     console.log(sapin);
//   }
// }
