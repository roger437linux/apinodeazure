![](https://awik.io/wp-content/uploads/2020/06/node-express-web-server.png)

# Api nodeJS para teste na Azure

git clone https://github.com/roger437linux/apinodeazure.git

### Criar ACR [Azure container registry] para armazenar imagem Docker

### Habilitar Usuário administrador em Chaves de acesso

docker login "Servidor-de-logon"

docker build --tag "Servidor-de-logon"/"Nome-da-imagem:version" .

docker push "Servidor-de-logon"/"Nome-da-imagem:version"
