


# ports pi 2
```
|---------|
|  2 |  4 |
|  3 |  5 |
|---------|
```


# port number

### device.DEVLINKS

full output
/dev/disk/by-id/usb-Generic_Flash_Disk_77C10DCD-0:0 /dev/disk/by-path/platform-3f980000.usb-usb-0:1.2:1.0-scsi-0:0:0:0



``` 
/dev/disk/by-path/platform-3f980000.usb-usb-0:1.5:1.0-scsi-0:0:0:0
                                                ^
```

### device.sys

```
/sys/devices/platform/soc/3f980000.usb/usb1/1-1/1-1.2/1-1.2:1.0/host11/target11:0:0/11:0:0:0/block/sda
```


# Howto split

```javascript
const out = `/devices/platform/soc/3f980000.usb/usb1/1-1/1-1.2/1-1.2:1.0/host5/target5:0:0/5:0:0:0/block/sda`
const spl = out.split('/')[7];
console.log(spl.charAt(spl.length -1));

```
