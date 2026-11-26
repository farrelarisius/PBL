<?php
include 'koneksi.php';
$nama = $_POST['nama'];
$username = $_POST['username'];
$password = $_POST['password'];
$input = mysqli_query($koneksi, "INSERT INTO aplikasi buku resep -pblif1_pc10 (username, password) VALUES ('$username', '$password')")
or die(mysqli_error($koneksi));

if($input){
    echo "<script>
        alert('Data Berhasil Disimpan');
        window.location='form.html';
        </script>";
} else {
    echo "<script>
        alert('Data Gagal Disimpan');
        window.location='form.html';
        </script>";
}
?>