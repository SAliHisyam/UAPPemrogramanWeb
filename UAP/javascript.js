function jumlahkan() {
  var kode = parseFloat(document.getElementById("kode").value);
  var barang = parseFloat(document.getElementById("barang").value);

  array = [
    ((kode = "001"), (hargabarang = "10000")),
    ((kode = "002"), (hargabarang = "20000")),
    ((kode = "003"), (hargabarang = "30000")),
  ];

  var hasil = hargabarang * barang;
  alert("Total Pembayaran :" + hasil);
  prompt("Masukkan Uang :", input);
}
