process.versions.electron = '1.0.0';
process.type = "browser";
module.exports = {
  app: {
    getAppPath: function () {
      return `${__dirname}/../testFiles`
    }
  }
};