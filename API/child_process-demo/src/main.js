const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.toggleDevTools();
  const pathIndex = path.resolve(__dirname, 'index.html');
  console.log(pathIndex);
  mainWindow.loadURL(`file://${pathIndex}`);

  mainWindow.on('close', () => {
    mainWindow = null;
  })

})