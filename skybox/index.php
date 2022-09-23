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
      <h1 id="text-logo">SKYBOX</h1>
      <p><a href="upload.html">Upload</a>
      <a href="#">Camera List</a></p>
    </header>

    <div id="preview">
      <?php
        require_once 'api.php';
        show_images();
      ?>
    </div>

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
