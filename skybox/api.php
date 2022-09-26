<?php
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


if(isset($_GET['get-images'])){
    $bool = is_bool(boolean($_GET['get-images']));
    print($bool);
}

if(isset($_GET['images-count'])){
    $int = is_int(int($_GET['images-count']));
    print($int);
}

if(isset($_GET['response-type'])){
    $string = is_string(string($_GET['response-type']));
    print($string);
}


if($bool && $int && $string){

}else{
    $error = true;
}

if($error){
    if(!$bool){
        print('get-images: is not a bool.<br>');
    }
    if(!$int){
        print('images-count: is not set, or not an integer.<br>');
    }
    if(!$string){
        print('response-type: is not a string, set, or invalid value.<br>');
    }
}
?>