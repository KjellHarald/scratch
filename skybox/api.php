<?php
if(isset($_POST['usr'], $_FILES['file'])){
    $usr = array('khps'=>'abc');
    if(array_key_exists($_POST['usr'], $usr) && $usr[$_POST['usr']] === $_POST['key']){
        $path = "images/".basename($_FILES['file']['name']);
        if(move_uploaded_file($_FILES['file']['tmp_name'], $path)){

        }
    }
}

if(isset($_GET['images']) && $_GET['images'] === "1"){
    print("<p id='clock'>These images will update every second: ".date('H:i:s')."</p>");
    $file_dir = array_diff(scandir("images/"), array('.', '..'));
    $f = array();
    foreach($file_dir as $file){
        if(is_file('images/'.$file)){
            array_push($f, $file);
            
                //file_put_contents('images.txt', $file."\n", FILE_APPEND);
            
        }
    }

    for($a=0;$a<2;$a++){
        if($a >= 2){break;}
        print('<div class="wrap-preview-row">');
            for($i=0;$i<3;$i++){
                $sf = array_rand($f, 1);
                print('<div class=\'preview-item\' style=\'background-image:url("images/'.$f[$sf].'");\'></div>');
            }
        print('</div>');
    }
}
?>