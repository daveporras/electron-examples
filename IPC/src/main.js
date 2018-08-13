const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const countdown = require('./countdown.js')
let mainWindow;

app.on('ready', _ => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  console.log('abierta');

  mainWindow.loadURL(`file://${path.resolve(__dirname, 'index.html')}`);

  mainWindow.on('close', _ => {
    console.log('closed');
    mainWindow = null;
  })
});

ipcMain.on('start-countdown', _ => {
  countdown(count => {
    mainWindow.webContents.send('countdown', count);
  });
})

