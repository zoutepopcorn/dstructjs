# dstructjs
dstruct ... js

Upon connecting a device the dd command will be issued to wipe th entire connected device.
The script is written to work on a Linux system, especially Raspberry pi.

# Installing 

## node js

```
sudo su;
wget -O - https://raw.githubusercontent.com/audstanley/NodeJs-Raspberry-Pi/master/Install-Node.sh | bash;
exit;
node -v;
```

## udev
```
sudo apt-get install libudev-dev pv
sudo npm install udev -g
```
#### errors
```
sudo apt-get update
sudo npm install -g --unsafe-perm
```

## app
```
git clone https://github.com/cytopyge/dstruct/
cd dstruct
npm install
```


# Run it

```
node app
```
