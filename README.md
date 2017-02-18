SampleApi
==========

Introduction
------------

This module is identical to node-config except that it works in the Electron environment.

Whenever your app gets packaged into an Electron executable, this module will still work as expected.

Installation
------------

```shell
$ npm install electron-node-config
$ mkdir config
$ vi config/default.json
```

Usage
-----

Assuming the following default.json:

```json
{
  "Customer": {
    "dbConfig": {
      "host": "prod-db-server"
    },
    "credit": {
      "initialDays": 30
    }
  }
}
```

Pull the config into your code:

```js
let config = require('electron-node-config');
let dbConfig = config.get('Customer.dbConfig');

console.log(config.customer.credit.initialDays);
console.log(dbConfig.host);
```


License
-------

May be freely distributed under the [MIT license](https://raw.githubusercontent.com/dw1284/electron-node-config/master/LICENSE).