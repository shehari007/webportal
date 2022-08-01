<?php
header("Access-Control-Allow-Origin: *");
//header('Content-Type: application/json; charset=utf-8');
include 'config_db.php';

$sql = "SELECT *  FROM isletmeler WHERE isletme_id = '21'";
/*where avm_adi like '%".$_GET["kelime"]."%'";*/
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
   // echo ($row["DATA_heading"]);
    //echo '<br/>';   
    // $respond = array (["id"=>$row["avm_id"], "avm_adi"=>$row["avm_adi"], "avm_adresi"=>$row["avm_adresi"], "avm_iletisimi"=>$row["avm_iletisimi"]]);
    //echo json_encode($respond);
    //echo '{
     // "name":"deneme",
    //  "id":1
     // }';
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