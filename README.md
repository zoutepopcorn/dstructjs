# dstructjs
dstruct ... js

Upon connecting a device the dd command will be issued to wipe th entire connected device.
The script is written to work on a Linux system, especially Raspberry pi.

# Installing 

https://community.roonlabs.com/t/howto-powermate-extension-on-a-raspberry-pi/23819


## node js

```
sudo su;
wget -O - https://raw.githubusercontent.com/audstanley/NodeJs-Raspberry-Pi/master/Install-Node.sh | bash;
exit;
node -v;
```
## install nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

#### .bash_profile 

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

```
nvm install 8
```

## udev
```
sudo apt-get install libudev-dev pv
sudo npm install udev -g
```
#### errors
```
sudo apt-get update
sudo npm install udev -g --unsafe-perm
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
