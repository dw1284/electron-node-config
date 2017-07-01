process.versions.electron = '1.0.0';
process.type = "renderer";

module.exports = {
    remote: {
        app: {
            getAppPath: function () {
                return `${__dirname}/../testFiles`
            }
        }
    }

};