#!/bin/bash
scp build/ieat.tar.gz  myge2319@mygeda.net:/var/chroot/home/content/20/7534920/data
ssh myge2319@mygeda.net "tar xfv /var/chroot/home/content/20/7534920/data/ieat.tar.gz -C /var/chroot/home/content/20/7534920/html"
