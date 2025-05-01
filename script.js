function konversiSuhu() {
    const input = document.getElementById("inputSuhu").value.trim();
    const satuan = document.getElementById("satuan").value;
    const hasilBox = document.getElementById("hasilKonversi");
    const penjelasanBox = document.getElementById("penjelasanKonversi");
  
    if (input === "" || isNaN(input)) {
        alert("Masukkan suhu dalam angka yang valid.");
        return;
    }
  
    const suhu = parseFloat(input);
    let hasil = "";
    let penjelasan = "";
  
    if (satuan === "cToF") {
        const fahrenheit = (suhu * 9 / 5) + 32;
        hasil = `${suhu}&deg;C = ${fahrenheit.toFixed(2)}&deg;F`;
        penjelasan = `(${suhu} × 9/5) + 32 = ${fahrenheit.toFixed(2)}`;
    } else {
        const celsius = (suhu - 32) * 5 / 9;
        hasil = `${suhu}&deg;F = ${celsius.toFixed(2)}&deg;C`;
        penjelasan = `(${suhu} - 32) × 5/9 = ${celsius.toFixed(2)}`;
    }
  
    hasilBox.innerHTML = hasil;
    penjelasanBox.innerHTML = `<strong>Cara hitung:</strong><br>${penjelasan}`;
}