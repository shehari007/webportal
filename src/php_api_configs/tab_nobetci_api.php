<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
include 'config_db.php';

$sql = "SELECT *  FROM isletmeler where calisma_saatler like '%NOBETCİ%' ";
//$sql = "SELECT *  FROM isletmeler where calisma_saatler like '%" .$_GET['acilyerler']."%' ";
// "SELECT *  FROM isletmeler where isletme_adi like '%".$_GET['searchtext']."%' ";
//"SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
//"SELECT isletme_adi  FROM isletmeler";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  while($row = $result->fetch_assoc()) {
     $alls[] = $row;
  }
  $jsonArray = $alls;

} else {
  echo "0 results";
}
$conn->close();
//SetHeader(200);
echo json_encode($jsonArray);
?>