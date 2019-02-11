'use strict';

const express = require('express');
const app = express();
const port = 3000;

const VaultClient = require('./bootstrap/vaultClient');
const vaultClient = new VaultClient();
vaultClient.init();

app.get('/', async (req, res) => {
  let result = await vaultClient.getFooAttr();
  res.send(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));