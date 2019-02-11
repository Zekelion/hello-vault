# hello-vault
hashicorp vault useage demo

Node.js client

## Usage

**Init Vault**

[init Vault and grant appRole](https://zekelion.github.io/2019/02/10/%E4%BD%BF%E7%94%A8Vault%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84Secret%E4%BF%A1%E6%81%AF-1/)

**Update Config**

update vault config roleID and secretID attrs

```json
"vault": {
  "addr": "http://127.0.0.1:8200",
  "roleID": "f39adbc5-3f9e-dfec-3e23-9562dced5c2f",
  "secretID": "0b8985d5-dc99-2e83-c331-5d678d8b592f"
}
```

**Start Server**

```shell
npm i

npm start
```