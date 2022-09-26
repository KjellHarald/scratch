<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <ul>
<?php
$nav = array_diff(scandir('.'), array('.', '..'));

$md = array();

foreach($nav as $project){
    if(str_split($project, 1)[0] !== "."){
        if(is_dir($project)){
            echo "<li><a href=\"".$project."\">".$project."</a></li>";
        }
        if(is_file($project) && explode('.', $project)[1] === "md"){
            array_push($md, $project);
        }
    }
}
?>
<ul>
</body>
</html>
