const {ipcRenderer, desktopCapturer, screen} = require('electron');
const path = require('path');
const fs = require('fs');

function getMainSource (desktopCapturer, screen, done) {
  const options = {
    types: ['screen'],
    thumbnailSize: screen.getPrimaryDisplay().workAreaSize
  }
  desktopCapturer.getSources(options, (err, sources) => {
    if (err) return console.log('Cannot capture screen: ', err);

    const isMainSource = source => source.name === 'Entire screen' || source.name === 'Screen 1'
    done(sources.filter(isMainSource)[0])
  });
}

function onCapture (event, targetDir) {
  getMainSource(desktopCapturer, screen, source => {
    const png = source.thumbnail.toPNG();
    const filePath = path.join(targetDir, new Date() + '.png');
    writeScreenshot(png, filePath);
  })
}

function writeScreenshot (png, filePath) {
  fs.writeFile(filePath, png, err => {
    if (err) return console.log('Failed to write screen: ', err);
  });
}

ipcRenderer.on('capture', onCapture);