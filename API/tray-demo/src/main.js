const {app, BrowserWindow, Tray, Menu} = require('electron');
const path = require('path');

app.on('ready', () => {

  new BrowserWindow({
    width: 800,
    height: 600
  });

  console.log('ready');

  const tray = new Tray(path.resolve(__dirname, 'ethereum.png'));
  const template = [{
    label: 'Wow',
    click: () => console.log('Wow')
  },
  {
    label: 'Awesome',
    click: () => console.log('Awesome')
  }];
  const contextMenu = Menu.buildFromTemplate(template);
  tray.setContextMenu(contextMenu);
  tray.setToolTip('My great app!')

})