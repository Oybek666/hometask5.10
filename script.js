// 1.  
let sum = 2 + 2;
console.log("2 sonni yig'indisi: " + sum);

// 2. 
console.log("Salom, dunyo!");

// 3.
let ism = prompt("Ismingizni kiriting:");
console.log("Salom, " + ism + "!");

// 4. 
let yosh = prompt("Yoshingizni kiriting:");
let hozirgiYil = new Date().getFullYear();
let tugilganYil = hozirgiYil - yosh;
console.log("Siz " + tugilganYil + " yilda tug'ilgansiz.");

// 5.
let son1 = prompt("Birinchi sonni kiriting:");
let son2 = prompt("Ikkinchi sonni kiriting:");
console.log("Kattasi: " + Math.max(son1, son2));

// 6. 
let son = prompt("Bir son kiriting:");
if (son % 2 == 0) {
  console.log("Juft son");
} else {
  console.log("Toq son");
}

// 7. 
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 8. 
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 9. 
let kiritilganSon = prompt("Bir son kiriting:");
console.log("Kvadrati: " + kiritilganSon * kiritilganSon);

// 10. 
let matn = prompt("Bir matn kiriting:");
console.log(matn.split("").reverse().join(""));

// 11. 
let matnUzunlik = prompt("Bir matn kiriting:");
console.log("Matn uzunligi: " + matnUzunlik.length);

// 12. 
let boshHarfMatn = prompt("Bir matn kiriting:");
console.log("Matnning bosh harfi: " + boshHarfMatn.charAt(0));

// 13. 
let massiv = [3, 1, 4, 1, 5, 9];
massiv.sort();
console.log(massiv);

// 14.
let soz = prompt("Bir so'z kiriting:");
console.log(soz.split("").reverse().join(""));

// 15.
let sonKvadrat = prompt("Bir son kiriting:");
console.log("Kvadrati: " + sonKvadrat * sonKvadrat);

// 16. 
let sonA = prompt("Birinchi sonni kiriting:");
let sonB = prompt("Ikkinchi sonni kiriting:");
console.log("Qoldiq: " + (Math.max(sonA, sonB) % Math.min(sonA, sonB)));

// 17.
if (sonA == sonB) {
  console.log("Sonlar teng");
} else {
  console.log("Kichik son: " + Math.min(sonA, sonB));
}

// O'rta darajadagi mashqlar:

// 1. 
let uzunMatn = prompt("Bir matn kiriting:");
let oRtaHarf = uzunMatn.charAt(Math.floor(uzunMatn.length / 2));
console.log("O'rta harf: " + oRtaHarf);

// 2.
let sonX = prompt("Birinchi sonni kiriting:");
let sonY = prompt("Ikkinchi sonni kiriting:");
if (sonX > 0 || sonY > 0) {
  console.log("Yig'indi: " + (Number(sonX) + Number(sonY)));
} else {
  console.log("Ko'paytma: " + (sonX * sonY));
}

// 3.
let mevalar = prompt("Mevalar ro'yxatini kiriting (vergul bilan):").split(",");
if (mevalar.includes("olma") || mevalar.includes("shaftoli")) {
  console.log("Bizda olma yoki shaftoli bor");
}

// 4.
let oy = prompt("Tug'ilgan oyingizni kiriting:");
let yilingiz = new Date().getFullYear() - yosh;
console.log("Siz " + yilingiz + " yilda tug'ilgansiz.");

// 5. 
let raqam = prompt("Raqam kiriting (1 dan 10 gacha):");
for (let i = 1; i <= 10; i++) {
  console.log(raqam + " x " + i + " = " + raqam * i);
}
