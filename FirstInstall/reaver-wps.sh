#!/bin/sh
sudo apt-get --assume-yes install libpcap-dev
cd /tmp
svn checkout reaver-wps.googlecode.com/svn/trunk/ reaver-wps
cd ./reaver-wps/src/
./configure
make 
sudo make install