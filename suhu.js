const prompt = require('prompt-sync')();
const fahrenheit =  (a) => 9 / 5 *a + 32;
const kelvin = (a) => a + 273;
const reamur = (a) => 4/5 *a;

const hitung = () => {
    let a = parseFloat(document.getElementById("celcius").value);
    let op = document.getElementById("jenisSuhu").value;
    let hasil ;

    if (op === "f") hasil = fahrenheit (a);
    else if (op === "k") hasil = kelvin (a);
    else if (op === "r") hasil = reamur (a);
    else hasil = "operator tidak valid";

document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}
