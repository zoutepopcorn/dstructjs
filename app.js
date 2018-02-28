const udev = require("udev");
const monitor = udev.monitor();
const exec = require('child_process').exec;
console.clear();
if (!process.env.SUDO_UID) {
  console.log("This is how to use it:\nsudo node app.js");
  process.exit();
}

function wipe(sdb, id) {
  console.log(`wipe ${sdb}`);
  // const CMD = `dd command`;
  // example: sudo dd if=/dev/urandom of=/dev/sda conv=fsync | pv -n
  const CMD = `sudo dd if=/dev/urandom of=${sdb} conv=fsync | pv -n`;
  console.log(CMD);
  //2 >\`date "+%Y%m%d%H%M%S"\``;
  let dd = exec(CMD);
  // DD output
  dd.stderr.on('data', function(data) {
    // TODO: LEDS
    console.log(`--> ${data}`);
  });
  dd.stdout.on('data', function(data) {
    // TODO: LEDS
    console.log(`--> ${data}`);
  });
}

monitor.on('add', function(device) {
  console.log("add monitor");
  // New device
  if (device.DEVNAME.indexOf("/dev/sd") == 0 && device.DEVTYPE.indexOf("disk") == 0) {
    // console.log(device);
    wipe(device.DEVNAME, device.ID_SERIAL_SHORT)
  }
});

monitor.on('remove', function(device) {
  console.log('removed ' + device);
});