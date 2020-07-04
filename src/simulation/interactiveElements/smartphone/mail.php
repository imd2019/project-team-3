<?php
  // based upon: https://www.codexworld.com/send-email-with-attachment-php/
  
  header("Content-Type: application/json");
  $content = json_decode(file_get_contents("php://input"), true);
  $from = $content['from'];
  $to = $content['to'];
  // $htmlContent = $content['content'];
 
  // Mail content
  $subject = "Simulationsspiel \"Social Whispers\"";
  $file = "test.pdf";
  $headers = "From: " . $from;
  $htmlContent = '
  <p>
    Liebe*r Teilnehmer*in,<br />
    <br />
    vielen Dank für Ihre Teilnahme an unserer Simulation und Ihr Interesse am Thema!<br />
    Im Anhang finden Sie weitere Hinweise zum Umgang mit Informationen in sozialen Medien.<br />
    <br />
    Viele Grüße<br />
    <br />
    Florian, Lars, Luisa und Max
  </p>'
    
  // Boundary  
  $semi_rand = md5(time());
  $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";  

  // Headers for attachment  
  $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 

  // Multipart boundary  
  $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" . 
  "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";  
 
  // Preparing attachment 
  if(!empty($file) > 0){ 
    if(is_file($file)){ 
      $message .= "--{$mime_boundary}\n"; 
      $fp = @fopen($file,"rb"); 
      $data = @fread($fp,filesize($file)); 
 
      @fclose($fp); 
      $data = chunk_split(base64_encode($data)); 
      $message .= "Content-Type: application/octet-stream; name=\"".basename($file)."\"\n" .  
      "Content-Description: ".basename($file)."\n" . 
      "Content-Disposition: attachment;\n" . " filename=\"".basename($file)."\"; size=".filesize($file).";\n" .  
      "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n"; 
    } 
  } 
  $message .= "--{$mime_boundary}--"; 

  // Send email 
  mail($to, $subject, $message, $headers);
?>