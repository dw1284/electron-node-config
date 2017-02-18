process.versions.electron = '1.0.0';

module.exports = {
  app: {
    getAppPath: function () {
      return `${__dirname}/../testFiles`
    }
  }
};