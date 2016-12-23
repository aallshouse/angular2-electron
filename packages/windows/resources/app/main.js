'use strict';
const electron = require('electron');

var mainWindow;

electron.app.on('window-all-closed', function(){
    if(process.platform != 'darwin'){
        electron.app.quit();
    }
});

electron.app.on('ready', function(){
    mainWindow = new electron.BrowserWindow({width: 1200, height: 750});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});