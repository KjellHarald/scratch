#!/usr/bin/env python3
from sys import argv
import requests
import os

def dsm_self_mac():
    open('/sys/network/class/', 'r').read()

def dsm_remote():
    r = requests.get('http:// /dsm.txt').status_code

mounted = []
d = os.listdir('/dev/')
for i in range(len(d)):
    if "sd" in d[i] and len(d[i]) == 3:
        mounted.append(d[i])
    
disks = []
d = os.listdir('/mnt/')
for i in range(len(d)):
    if "sd" in d[i] and len(d[i]) == 3:
        if d[i] in mount and os.path.exists(f'/mnt/{d[i]}/dms.txt'):
            disks.append(d[i])

print(disks)



#for i in enumerate(disks):
#    if os.path.exists(f'/mnt/{disks[i]}/'):
