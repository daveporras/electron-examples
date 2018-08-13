const {app, BrowserWindow, Menu, Tray, clipboard} = require('electron');
const path = require('path');

const ITEM_MAX_LENGTH = 20;
let mainWindow;

function checkClipboardForChange (clipboard, onChange) {
  let cache = clipboard.readText();
  let latest;
  setInterval(() => {
    latest = clipboard.readText();
    if (latest !== cache) {
      cache = latest;
      onChange(cache);
    }
  }, 1000)
}

function formatItem (item) {
  return item && item.length > ITEM_MAX_LENGTH ? item.substr(0, ITEM_MAX_LENGTH) + '...' : item;
}

function formatMenuTemplateForStack (clipboard, text) {
  return {
    label: `Copy ${formatItem(text)}`,
    click: () => {
      clipboard.writeText(text)
    }
  }
}

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  const tray = new Tray(path.resolve(__dirname, 'ethereum.png'));
  const template = [{
    label: '<Empty>',
    enabled: false
  }];
  const contextMenu = Menu.buildFromTemplate(template);
  tray.setContextMenu(contextMenu);

  console.log('ready');

  checkClipboardForChange (clipboard, text => {
    tray.setContextMenu(Menu.buildFromTemplate([formatMenuTemplateForStack(clipboard, text)]));
  })
})