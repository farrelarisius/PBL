<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "aplikasi buku resep -pblif1_pc10"; //Nama Database
//melakukan koneksi ke db
$koneksi = mysqli_connect($host, $user, $pass, $db);
if (!$koneksi) {
    echo "Gagal Konek: " . die(mysqli_error($koneksi));
}
?>