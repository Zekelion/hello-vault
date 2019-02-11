listener "tcp" {
  address = "127.0.0.1:8200"
  tls_disable = 1
}

storage "mysql" {
  database = "hello_vault"
  username = "vaultUser"
  password = "123456"
}

# Advertise the non-loopback interface
api_addr = "http://127.0.0.1:8200"
cluster_addr = "http://127.0.0.1:8201"