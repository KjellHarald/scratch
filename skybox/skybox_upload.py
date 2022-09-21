#!/usr/bin/env python3
import requests

url = "http://127.0.0.1/skybox/api.php"
file = {'file': open("../Parallax/images/pexels-pixabay-39561.jpg", "rb")}
requests.post(url, files=file)