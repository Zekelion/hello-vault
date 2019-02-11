# hello-vault
hashicorp vault useage demo

## SpringBoot Client

**Usage**

init Vault

[init Vault and grant appRole](https://zekelion.github.io/2019/02/10/%E4%BD%BF%E7%94%A8Vault%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84Secret%E4%BF%A1%E6%81%AF-1/)

update bootstrap config: vault.app-role.role-id and vault.app-role.secret-id

```yml
vault:
  host: localhost
  port: 8200
  scheme: http
  authentication: APPROLE
  app-role:
    role-id: f39adbc5-3f9e-dfec-3e23-9562dced5c2f
    secret-id: a49d149c-5b24-b0f6-58f4-0d865d2b083c
    role: my-role
    app-role-path: approle
```

start server

```shell
gradle bootRun
```

request for foo

```shell
curl -X GET http://localhost:3000
```