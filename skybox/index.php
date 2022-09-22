<!DOCTYPE html>
<html>
  <head>
    <title>Skybox Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF8" />
    <link rel="stylesheet" href="styles.css" />
    <script
      src="https://code.jquery.com/jquery-3.6.1.min.js"
      integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
      crossorigin="anonymous"
    ></script>
    <script src="srv.js" defer></script>
  </head>

  <body>
    <header>
      <h1 id="text-logo">Skybox Project</h1>
      <a href="upload.html">Upload</a>
    </header>

    <div id="preview">
      <?php
        require_once 'api.php';
        show_images();
      ?>
    </div>
    <script>
      //let timer = setInterval(display, 1000);
      //function display() {
      //displayImageBoxes();
      //$("#preview").load("api.php?images=1");
      //}
      //display();
    </script>

    <footer>
      <div id="created-in">
        <div><img src="icons/html.svg" /></div>
        <div><img src="icons/css.svg" /></div>
        <div><img src="icons/javascript.svg" /></div>
        <div><img src="icons/php.svg" /></div>
      </div>
    </footer>
  </body>
</html>
