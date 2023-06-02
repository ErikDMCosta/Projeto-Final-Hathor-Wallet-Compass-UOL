# Projeto Final Hathor Wallet - Compass UOL

O projeto trata-se de um Marketplace de NFTs construído em Node.js que permite a venda e compra de NFTs de maneira simples, construída em cima da Hathor Network.

## Tecnologias utilizadas

- Node.js
- Hathor Network
- MongoDB
- Docker

## Sumário

- [Como utilizar](#como-utilizar)

## Como utilizar

Siga as instruções abaixo para configurar e executar o Marketplace NFTs:

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/ErikDMCosta/Projeto-Final-Hathor-Wallet-Compass-UOL.git
```

2. Navegue até o diretório do projeto:

```bash
cd Projeto-Final-Hathor-Wallet-Compass-UOL
```

3. Instale as dependências necessárias usando o npm:

```bash
npm install
```

4. Configure as variáveis de ambiente:

    Crie um arquivo .env na raiz do projeto.
    Adicione as seguintes variáveis de ambiente ao arquivo .env e preencha com as informações necessárias:

```bash
HEADLESS_WALLET_API_URL=
DB_HOST=
DB_PORT=
DB_NAME=
DB_DIALECT=
PORT=
```

5. Inicialize a Headless Wallet e o MongoDB no docker

- Headless Wallet

```bash
docker run --rm --entrypoint npm \
  hathornetwork/hathor-wallet-headless \
  run generate_words
```

```bash
docker run \
  -it -p 8000:8000 \
  hathornetwork/hathor-wallet-headless \
  --seed_default '<24_words_seed_phrase_string>' \
  --network testnet \
  --server https://node1.testnet.hathor.network/v1a/
```

- MongoDB

No diretório principal do projeto existe um arquivo docker-compose.yaml ele contem uma imagem do MongoDB. Navegue até o diretŕio e execute o seguinte comando

```bash
docker-compose up -d
```

6. Inicie o servidor:

```bash
npm start
```

Agora você está pronto para começar a utilizar o Marketplace NFTs para comprar e vender NFTs na Hathor Network.

