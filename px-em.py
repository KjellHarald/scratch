#!/usr/bin/env python3
from sys import argv

# Calculate px into em.

if len(argv) == 2:
    print(int(argv[1]) / 16)