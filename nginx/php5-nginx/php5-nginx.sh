#!/bin/sh
#http://andrey.org/nginx-php-debian-lenny/

BASE_URL="https://raw.github.com/nyaa/UbuntuScript/master/nginx/php5-nginx/"

sudo apt-get --assume-yes install php5-cli php5-cgi build-essential
echo "######### building spawn-fcgi #############"
cd /tmp
wget http://www.lighttpd.net/download/lighttpd-1.4.18.tar.bz2
tar -xvjf lighttpd-1.4.18.tar.bz2
cd lighttpd-1.4.18
./configure
make
sudo cp src/spawn-fcgi /usr/bin/spawn-fcgi
echo "######### downloading php-fastcgi #############"
cd /usr/bin
sudo wget -N $BASE_URL/php-fastcgi
sudo chmod 755 /usr/bin/php-fastcgi
echo "######### downloading init-fastcgi #############"
cd /etc/init.d/
sudo wget -N $BASE_URL/init-fastcgi
sudo chmod 755 /etc/init.d/init-fastcgi
echo "######### launch init-fastcgi #############"
sudo /etc/init.d/init-fastcgi start
echo "######### testing fastcgi port ############"
sudo netstat -tulpn | grep :9000
sleep 5
echo "######### autostart fastcgi ###########"
sudo update-rc.d init-fastcgi defaults
echo "######### restart nginx ###########"
sudo /etc/init.d/nginx restart
echo "######### downloading sample php site conf ########"
cd /tmp
wget -N $BASE_URL/nginx.conf.sample
vim nginx.conf.sample
#echo "######## append to nginx.conf ##############"
#cat nginx.conf.sample | sudo tee -a /opt/nginx/conf/nginx.conf
