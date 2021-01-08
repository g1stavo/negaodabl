#!/usr/bin/env node

const { exec: exect } = require('child_process')
const path = require('path')
const fs = require('fs')

const mainPath = path.dirname(fs.realpathSync(__filename))

const jackChanny = () => {
  const args = process.argv.slice(2);
  const soundPath = path.join(mainPath, '/audios', getFilenameAudio(args[0]))
  const cmd = {
    linux: `paplay ${soundPath}.ogg`,
    mac: `afplay  ${soundPath}.mp3`
  }

  switch (process.platform) {
    case 'linux':
      return exec(cmd.linux)
    case 'darwin':
      return exec(cmd.mac)
    default:
      throw new Error(`Can't press the braba in this platform, only linux and darwin`)
  }
}

const getFilenameAudio = arg => {
  switch (arg) {
    case 'apertaabraba':
      return './aperta_a_braba'
    case 'bagulhodoido':
      return './bagulho_doido'
    default:
      return './mery'
  }
};

const exec = cmd => {
  return exect(cmd, err => {
    if (err) console.error(err)
  })
}

module.exports = jackChanny

if (!module.parent) {
  jackChanny()
}
