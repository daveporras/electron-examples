const {ipcRenderer} = require('electron');

document.getElementById('start').addEventListener('click', _ => {
  console.log('clicked');
  ipcRenderer.send('start-countdown');
});

ipcRenderer.on('countdown', (event, count) => {
  document.getElementById('count').innerHTML = count;
})