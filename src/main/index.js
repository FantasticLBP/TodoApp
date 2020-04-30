'use strict'

import { app, BrowserWindow, Menu, dialog } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(winURL)

  // Open dev tools initially when in development mode
  if (process.env.NODE_ENV === 'development"') {
    mainWindow.webContents.on('did-frame-finish-load', () => {
      mainWindow.webContents.once('devtools-opened', () => {
        mainWindow.focus()
      })
      mainWindow.webContents.openDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  let dockMenu = Menu.buildFromTemplate([
    {
      label: 'Todo',
      submenu: [
        {
          label: 'About todo',
          click () {
            dialog.showMessageBox({
              title: '信息',
              type: 'info',
              message: 'App 名称： Todo\n版本：0.01\n作者：@杭城小刘\nGithub: https://github.com/FantasticLBP'
            })
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Check for updates',
          click () {
            dialog.showMessageBox({
              title: '错误',
              type: 'info',
              message: '该版本已经是最新哦'
            })
          }
        }
      ]
    }
  ])
  Menu.setApplicationMenu(dockMenu)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
