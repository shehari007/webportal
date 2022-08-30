<?php
if($_POST){

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_URL, 'https://api.pinata.cloud/pinning/pinFileToIPFS');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POST, 1);
  $args['file'] = new CurlFile('C:/wamp/www/fatura_web/dosyalar/'.$_POST["file_name"].'.txt', 'text/plain', $_POST["file_name"].'.txt');
  curl_setopt($ch, CURLOPT_POSTFIELDS, $args);

  $headers = array();
  $headers[] = 'Pinata_api_key: 3decd9da2746dfea497c';
  $headers[] = 'Pinata_secret_api_key: 91e148ebbac5619185d865c1ddaa0fbc12444f58a5fe6b9024e07879d0e4edc6';
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  $result = curl_exec($ch);
  if (curl_errno($ch)) {
      echo 'Error:' . curl_error($ch);
  }
  curl_close($ch);

  $json = json_decode($result, true);
  //print_r($json);
  echo $json["IpfsHash"];
  /*
  echo $json["PinSize"];
  echo $json["Timestamp"];
  echo $json["isDuplicate"];
*/

}


?>
