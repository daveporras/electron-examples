const {app, BrowserWindow, globalShortcut} = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    frame: false
  });
  console.log('ready');

  mainWindow.openDevTools();

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('close', () => {
    mainWindow = null;
  })

  globalShortcut.register('Ctrl+Alt+Cmd+D', () => {
    console.log('got shortcut')
    /* mainWindow.webContents.send('capture', app.getPath('pictures')); */ // app.getPath('pictures) guarda los screen en la carpeta Pictures del Sistema Operativo
    mainWindow.webContents.send('capture', path.resolve(__dirname, 'pictures'));
  });

});

