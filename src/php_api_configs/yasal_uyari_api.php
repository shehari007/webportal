<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
include 'config_db.php';

$sql = "SELECT DATA_aciklama, DATA_heading FROM isletmeler WHERE DATA_heading = 'Yasal Uyarılar'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    
     $alls[] = $row;
  }
  $jsonArray = $alls;
} else {
  echo "0 results";
}
$conn->close();
echo json_encode($alls);
?>