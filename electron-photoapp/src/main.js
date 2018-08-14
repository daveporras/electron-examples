const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false
  });

  mainWindow.loadURL(`file://${path.resolve(__dirname, 'index.html')}`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('close', () => {
    mainWindow = null;
  })
})