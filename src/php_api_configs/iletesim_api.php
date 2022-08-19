<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
include 'config_db.php';

//$sql = "insert into iletisim (adi_soyadi, eposta, yorum) values ('".$_GET["adi_soyadi"]."','".$_GET["eposta"]."','".$_GET["yorum"]."')";

$sorgu = $conn->prepare("insert into iletisim (adi_soyadi, eposta, yorum) values (?, ?, ?)");
$sorgu->bind_param('sss', $_POST["adi_soyadi"], $_POST["eposta"], $_POST["yorum"]);
$sorgu->execute();

if($sorgu->insert_id){
    $durum['sonuc'] = $sorgu->insert_id;
} else {
    $durum['sonuc'] = "hata";
}
$conn->close();
//SetHeader(200);
echo json_encode($durum);
?>