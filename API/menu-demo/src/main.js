const {app, BrowserWindow, Menu} = require('electron');

app.on('ready', () => {
  new BrowserWindow({
    width: 800,
    height: 600
  });
  console.log('ready');

  const name = app.getName();
  const template = [{
    label: name,
    submenu: [{
      label: `About ${name}`,
      click: () => {
        console.log('about clicked');
      },
      role: 'about'
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      },
      accelerator: 'Cmd+Q'
    }]
  }];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
})