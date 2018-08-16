const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    resizable: false
  });

  mainWindow.loadURL(`file://${path.resolve(__dirname, 'index.html')}`);

  mainWindow.openDevTools();

  mainWindow.on('close', () => {
    mainWindow = null;
  })
})