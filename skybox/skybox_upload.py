#!/usr/bin/env python3
import requests
from sys import argv

if len(argv) === 2:
    file = argv[1]
    url = "http://127.0.0.1/skybox/api.php"
    file_upload = {'file': open(file, "rb")}
    requests.post(url, files=file_upload)
else:
    print('Missing Image path/file')
    exit()