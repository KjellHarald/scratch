#!/usr/bin/env python3
from os import system
from sys import argv
from time import sleep

if len(argv) >=2:
    while True:
        system('git add .')
        system('git commit -m \"push all\"')
        system('git push -u origin main')
        sleep(600)
else:
    system('git add .')
    system('git commit -m \"push all\"')
    system('git push -u origin main')