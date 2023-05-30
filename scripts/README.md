# Scripts

A pasta `scripts` contém scripts úteis para configurar e executar a Hathor Wallet Headless usando o Docker.

## Descrições dos Scripts

### 01-generate-words.sh

Este script é responsável por gerar uma semente (frase mnemônica) para a carteira.

Para executar o script, utilize o seguinte comando:

```bash
./01-generate-words.sh
```

### 02-start-headless-wallet.sh

Este script inicia a API da Hathor Wallet Headless em um contêiner Docker. Ele requer uma frase de semente de 24 palavras como parâmetro.

Abra o arquivo 02-start-headless-wallet.sh e substitua `<24_words_seed_phrase_string>` pela semente gerada ou por uma semente existente.

Para iniciar a API da Headless Hathor Wallet, utilize o seguinte comando:

```bash
./02-start-headless-wallet
```

Por favor, observe que o script `02-start-headless-wallet.sh` está pré-configurado para funcionar na rede de teste Hathor. Se você pretende usar uma rede diferente, faça as modificações necessárias dentro do script.

## Começando

Assim que a Headless Hathor Wallet estiver em execução, você pode interagir com ela usando a coleção do Postman fornecida.

1. Abra o aplicativo Postman.
2. Importe a coleção do Postman a partir da pasta "collections".
3. Localize a requisição "headless-hathor-wallet/start" dentro da coleção.
