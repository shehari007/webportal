<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
include 'config_db.php';

$sql = "SELECT DATA_aciklama, DATA_web_adresi, DATA_heading FROM isletmeler WHERE DATA_heading = 'Pazarlama Politikasi'";
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