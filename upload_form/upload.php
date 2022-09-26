<?php
// This code is insecure! Do not expose
if(isset($_POST['upload'], $_FILES['file'])){
    $path = "images/".basename(date('HisdmY').'-'.$_FILES['file']['name']);
    if(move_uploaded_file($_FILES['file']['tmp_name'], $path)){
        print('Upload Success.');
    }else{
        print('Upload Failed.');
    }
}
?>