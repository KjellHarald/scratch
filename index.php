<?php
$nav = array_diff(scandir('.'), array('.', '..'));
foreach($nav as $project){
    if(is_dir($project)){
        echo "<li><a href=\"".$project."\">".$project."</a></li>";
    }
}
?>