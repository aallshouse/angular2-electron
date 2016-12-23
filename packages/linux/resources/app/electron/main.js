System.register("electron/main", [], function($__export) {
  "use strict";
  var electron,
      mainWindow;
  return {
    setters: [],
    execute: function() {
      electron = require('electron');
      electron.app.on('window-all-closed', function() {
        if (process.platform != 'darwin') {
          electron.app.quit();
        }
      });
      electron.app.on('ready', function() {
        mainWindow = new electron.BrowserWindow({
          width: 1200,
          height: 750
        });
        mainWindow.loadURL('file://' + __dirname + '/index.html');
        mainWindow.webContents.openDevTools();
        mainWindow.on('closed', function() {
          mainWindow = null;
        });
      });
    }
  };
});
