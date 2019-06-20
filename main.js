// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: true
    // {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // 应用程序关闭时触发
  mainWindow.on('closed', function () {
    //当关闭应用程序应该删除该应用窗口对象
    mainWindow = null
  })
    //打开调试
  mainWindow.webContents.openDevTools()
}
//完成初始化时被触发，可通过app.isReady()方法检查此事件是否已触发
app.on('ready', createWindow)
//应用程序退出之前被触发
app.on('before-quit',()=>{
  alert('程序快退出了！');
})
// 当所有窗口都被关闭时退出应用
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
//当应用程序首次启动或是重新激活都触发
app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
