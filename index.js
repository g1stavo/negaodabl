#!/usr/bin/env node

const exect = require('child_process').exec
const path = require('path')
const fs = require('fs')

const mainPath = path.dirname(fs.realpathSync(__filename))

const run = () => {
  const args = process.argv.slice(2);

  const filenameAudio = getFilenameAudio(args[0])
  const soundPath = path.join(mainPath, '/audios', filenameAudio)
  const cmd = {
    linux: `paplay ${soundPath}.ogg`,
    mac: `afplay  ${soundPath}.mp3`
  }

  switch (process.platform) {
    case 'linux':
      return exec(cmd.linux)
    case 'darwin':
      return exec(cmd.mac)
  }
}

const getFilenameAudio = (arg) => {
  switch (arg) {
    case 'apertaabraba':
      return './aperta_a_braba'
    case 'bagulhodoido':
      return './bagulho_doido'
    default:
      return './mery'
  }
};

const exec = (cmd) => {
  return exect(cmd, err => {
    if (err) console.error(err)
  })
}

module.exports = run

if (!module.parent) {
  run()
}
