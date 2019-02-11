# Normal servers have version 1 of KV mounted by default, so will need these
# paths:
path "secret/*" {
  capabilities = ["create"]
}

path "secret/hello" {
  capabilities = ["read"]
}

# Dev servers have version 2 of KV mounted by default, so will need these
# paths:
path "secret/data/*" {
  capabilities = ["create"]
}

path "secret/data/hello" {
  capabilities = ["read"]
}
