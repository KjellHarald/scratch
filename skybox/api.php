<?php
// This code is insecure! Do not expose
if(isset($_FILES['file'])){
    
    count(explode('.', $_FILES['file']['name']));
    
    $path = "images/".basename(date('HisdmY').'-'.$_FILES['file']['name']);
    move_uploaded_file($_FILES['file']['tmp_name'], $path);
}elseif($_SERVER['REQUEST_URI'] === "/skybox/api.php"){
    print('Hello World');
}

function show_images(){
    $file_dir = array_diff(scandir("images/"), array('.', '..'));
    $f = array();
    foreach($file_dir as $file){
        if(is_file('images/'.$file)){
            array_push($f, $file);
        }
    }

    
    $c = count($f);
    for($a=0;$a<$c;$a++){
        if(count($f) / 3 === 1){
            $c += 1;
        }
        if($a >= 2){break;}
        print('<div class="wrap-preview-row">');
            for($i=0;$i<3;$i++){
                $sf = array_rand($f, 1);
                print('<img id="i'.$a.$i.'" class="boximg" src="images/'.$f[$sf].'">');
            }
        print('</div>');
    }
}
?>