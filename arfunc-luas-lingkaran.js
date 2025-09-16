const prompt = require('prompt-sync')();
const luasLingkaran = (jarijari)=> {3.14 * jarijari * jarijari };
let jarijari = parseFloat(prompt('Masukan jari-jari Lingkaran : '));

console.log(`Luas lingkaran adalah ${luasLingkaran(jarijari)}` );

