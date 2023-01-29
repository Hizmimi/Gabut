function hitungBMI() {
  var tinggi = document.getElementById("tinggi").value;
  var berat = document.getElementById("berat").value;
  var bmi = berat / (((tinggi / 100) * tinggi) / 100);
  var hasil = document.getElementById("hasil");
  var kategori = "";

  if (bmi < 18.5) {
    kategori = "Berat badan kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Berat badan ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Berat badan berlebihan";
  } else if (bmi >= 30 && bmi <= 39.9) {
    kategori = "Berat badan sangat berlebihan";
  } else {
    kategori = "Obesitas";
  }

  hasil.innerHTML = "BMI anda: " + bmi + "<br>" + "Kategori: " + kategori;
}
