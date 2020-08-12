const coolImages = require('cool-images');
const moment = require('moment');
const fs = require('fs');

const coolImg = coolImages.many(600, 800, 10);
const time = moment().format("YYYY/MM/DD h:mm:ss");

printLog(time+"\n");
coolImg.forEach(element => printLog(element+"\n"));

function printLog(reg){
    fs.appendFile('log.txt', reg, (err) => {
        if (err) {
            return console.log(err);
        }
      });
}



