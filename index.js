if (process.versions && process.versions.electron) {
  if(process.type === "browser") {
      process.env.NODE_CONFIG_DIR = require('electron').app.getAppPath() + '/config';
  } else if (process.type == "renderer") {
      process.env.NODE_CONFIG_DIR = require('electron').remote.app.getAppPath() + '/config';
  }
}

module.exports = require('config');