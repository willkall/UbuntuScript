#!/bin/sh

sudo apt-get --assume-yes install bitcoind
mkdir -pv ~/.bitcoin/

cat > ~/.bitcoin/bitcoin.conf <<EOL
# bitcoin.conf configuration file. Lines beginning with # are comments.


# Network-related settings:

# Run on the test network instead of the real bitcoin network.
#testnet=0

# Connect via a socks4 proxy
#proxy=127.0.0.1:9050

##############################################################
##            Quick Primer on addnode vs connect            ##
##  Let's say for instance you use addnode=4.2.2.4          ##
##  addnode will connect you to and tell you about the      ##
##    nodes connected to 4.2.2.4.  In addition it will tell ##
##    the other nodes connected to it that you exist so     ##
##    they can connect to you.                              ##
##  connect will not do the above when you 'connect' to it. ##
##    It will *only* connect you to 4.2.2.4 and no one else.##
##                                                          ##
##  So if you're behind a firewall, or have other problems  ##
##  finding nodes, add some using 'addnode'.                ##
##                                                          ##
##  If you want to stay private, use 'connect' to only      ##
##  connect to "trusted" nodes.                             ##
##                                                          ##
##  If you run multiple nodes on a LAN, there's no need for ##
##  all of them to open lots of connections.  Instead       ##
##  'connect' them all to one node that is port forwarded   ##
##  and has lots of connections.                            ##
##       Thanks goes to [Noodle] on Freenode.               ##
##############################################################

# Use as many addnode= settings as you like to connect to specific peers
#addnode=69.164.218.197
#addnode=10.0.0.2:8333

# ... or use as many connect= settings as you like to connect ONLY
# to specific peers:
#connect=69.164.218.197
#connect=10.0.0.1:8333


# Maximum number of inbound+outbound connections.
#maxconnections=


# JSON-RPC options (for controlling a running Bitcoin/bitcoind process)

# server=1 tells Bitcoin-QT to accept JSON-RPC commands.
#server=0

# You must set rpcuser and rpcpassword to secure the JSON-RPC api
#rpcuser=Ulysseys
#rpcpassword=YourSuperGreatPasswordNumber_DO_NOT_USE_THIS_OR_YOU_WILL_GET_ROBBED_385593

# How many seconds bitcoin will wait for a complete RPC HTTP request.
# after the HTTP connection is established. 
#rpctimeout=30

# By default, only RPC connections from localhost are allowed.  Specify
# as many rpcallowip= settings as you like to allow connections from
# other hosts (and you may use * as a wildcard character):
#rpcallowip=10.1.1.34
#rpcallowip=192.168.1.*

# Listen for RPC connections on this TCP port:
#rpcport=8332

# You can use Bitcoin or bitcoind to send commands to Bitcoin/bitcoind
# running on another host using this option:
#rpcconnect=127.0.0.1

# Use Secure Sockets Layer (also known as TLS or HTTPS) to communicate
# with Bitcoin -server or bitcoind
#rpcssl=1

# OpenSSL settings used when rpcssl=1
#rpcsslciphers=TLSv1+HIGH:!SSLv2:!aNULL:!eNULL:!AH:!3DES:@STRENGTH
#rpcsslcertificatechainfile=server.cert
#rpcsslprivatekeyfile=server.pem


# Miscellaneous options

# Set gen=1 to attempt to generate bitcoins
#gen=0

# Use SSE instructions to try to generate bitcoins faster.
#4way=1

# Pre-generate this many public/private key pairs, so wallet backups will be valid for
# both prior transactions and several dozen future transactions.
#keypool=100

# Pay an optional transaction fee every time you send bitcoins.  Transactions with fees
# are more likely than free transactions to be included in generated blocks, so may
# be validated sooner.
#paytxfee=0.00

# Allow direct connections for the 'pay via IP address' feature.
#allowreceivebyip=1

# User interface options

# Start Bitcoin minimized
#min=1

# Minimize to the system tray
#minimizetotray=1
EOL