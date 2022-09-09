#!/usr/bin/env python3
from os import system

system('git add .')
system('git commit -m \"push all\"')
system('git push -u origin main')