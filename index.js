#!/usr/bin/env node

const exect = require('child_process').exec
const path = require('path')
const fs = require('fs')

const mainPath = path.dirname(fs.realpathSync(__filename))
const soundPath = path.join(mainPath, './mery')

const jackChanny = () => {
  const cmd = {
    linux: `paplay ${soundPath}.ogg`,
    windows: `${path.join(`${mainPath}./forWindows.vbs`)} ${soundPath}.mp3`,
    mac: `afplay  ${soundPath}.mp3`
  }

  switch (process.platform) {
    case 'linux':
      return exec(cmd.linux)
    case 'win32':
      return exec(cmd.windows)
    case 'darwin':
      return exec(cmd.mac)
  }
}

const exec = (cmd) => {
  return exect(cmd, err => {
    if (err) console.error(err)
  })
}

module.exports = jackChanny

if (!module.parent) {
  jackChanny()
}
