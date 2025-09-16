const prompt = require('prompt-sync')();

  let angka1 = parseFloat(prompt('Masukan angka1: '));
  let angka2 = parseFloat(prompt('Masukan angka2: '));
    console.log('Contoh operasi matematika +, -, *, /')
  let operasi = prompt('Masukan operasi yang ingin dilakukan: ')

  if (operasi === '+'){
    let hasil = angka1 + angka2;
    console.log(`Hasil Penjumlahan ${angka1} dengan ${angka2} adalah ${hasil}`);
        return hasil;
    }else if (operasi === '-'){
    let hasil = angka1 - angka2;
    console.log(`Hasil Pengurangan ${angka1} dengan ${angka2} adalah ${hasil}`);
        return hasil;
    } else if (operasi === '*'){
    let hasil = angka1 * angka2;
    console.log(`Hasil Perkalian ${angka1} dengan ${angka2} adalah ${hasil}`);
        return hasil;
    } else if (operasi === '/'){
    let hasil = angka1 / angka2;
    console.log(`Hasil Pembagian ${angka1} dengan ${angka2} adalah ${hasil}`);
        return hasil;
    } 

