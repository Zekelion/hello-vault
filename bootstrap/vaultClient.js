'use strict';

const config = require('config');
const Vault = require('node-vault');
const agent = require('superagent');

const VAULT_LOGIN_ENDPOINT = '/v1/auth/approle/login';
const HELLO_ATTR_PATH = 'secret/hello';

class VaultClient {
  constructor() {
    this.addr = '';
    this.vault = null;
  }

  async getFooAttr() {
    let self = this;
    try {
      if (!self.vault) {
        return config.get('foo') || '';
      }

      let result = await self.vault.read(HELLO_ATTR_PATH);
      return (result.data && result.data.foo) || config.get('foo') || '';
    } catch (error) {
      console.error(error);
    }
  }

  async init() {
    let self = this;
    try {
      if (!config.has('vault.addr')) {
        throw {
          errorCode: 'E_VAULT_INIT_017',
          reason: 'missing config param'
        };
      }

      self.addr = config.get('vault.addr');
      let clientToken = await agent.post(self.addr + VAULT_LOGIN_ENDPOINT).send({
        role_id: config.get('vault.roleID'),
        secret_id: config.get('vault.secretID')
      });

      if (!clientToken || !clientToken.body || !clientToken.body.auth || !clientToken.body.auth.client_token) {
        throw {
          errorCode: 'E_VAULT_INIT_047',
          reason: 'failed to login vault'
        };
      }

      clientToken = clientToken.body.auth.client_token;
      console.log(clientToken);

      self.vault = Vault({
        endpoint: self.addr,
        token: clientToken
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = VaultClient;