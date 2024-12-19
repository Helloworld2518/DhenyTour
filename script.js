function test() {
  var destinasi = document.getElementById("destinasi").value;
  var nama = document.getElementById("nama").value;
  var email = document.getElementsByName("mail")[0].value;
  var wa =
    "Halo, saya: " +
    nama +
    "%3A%0A" +
    "Email: " +
    email +
    "%3A%0A" +
    "Destinasi yang ingin saya Tanyakan: " +
    destinasi;
  var nomor = "https://wa.me/6281901242626?text=" + wa;
  window.open(nomor);
}
