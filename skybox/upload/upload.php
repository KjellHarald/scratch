<?php
// This code is insecure! Do not expose
if(isset($_FILES['file'])){
    
    $inputLenght = count(explode('.', $_FILES['file']['name']));
    $image_type = explode('.', $_FILES['file']['name'])[$inputLenght];
    
    switch($image_type){
        case "jpg" or "JPG":
            $upload = true;
        break;
        case "jpeg" or "JPEG":
            $upload = true;
        break;
        case "webp" or "WEBP":
            $upload = true;
        break;
        case "png" or "PNG":
            $upload = true;
        break;
    }

    if($upload){
        $path = "../images/".basename(date('HisdmY').'-'.$_FILES['file']['name']);
        move_uploaded_file($_FILES['file']['tmp_name'], $path);
    }
}
?>