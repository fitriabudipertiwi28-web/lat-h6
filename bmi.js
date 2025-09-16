const indeks = (a,b) => a / b*b;

const hitung = () => {
    let a = parseFloat(document.getElementById("berat").value);
    let b = parseFloat(document.getElementById("tinggi").value);
    let hasil ;

    if (indeks <= 18.5) hasil = "berat badan kurang (underweight)";
    else if (18.5 <= indeks <= 24.9) hasil = "normal/ideal";
    else if (25  <= indeks <= 29.9) hasil = "kelebihan berat badan (overheight)";
    else if (indeks >= 30) hasil = "oobesitas";
    else hasil = "Masukan berat dan tinggi baSdan";

document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}