if (process.versions && process.versions.electron) {
  process.env.NODE_CONFIG_DIR = require('electron').app.getAppPath() + '/config';
}

module.exports = require('config');