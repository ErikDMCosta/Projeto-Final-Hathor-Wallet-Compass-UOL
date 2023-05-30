# Token API

A Token API expõe um endpoint para criar NFTs. Ela segue um processo de vários passos, incluindo a geração de uma imagem a partir da descrição dos metadados usando a Image API, o upload da imagem para o IPFS usando a API do Infura IPFS e, por fim, a criação de um novo NFT usando a API do Hathor Headless Wallet.

## Configuração

Para configurar a Token API, siga as instruções abaixo:

1. Crie um arquivo `.env`:
   - Faça uma cópia do arquivo `.demo.env` no diretório `apis/token-api` e renomeie-o para `.env`.
   - Abra o arquivo `.env` e substitua os espaços reservados pelos valores necessários.

2. Instale as dependências:
   - Execute o seguinte comando para instalar as dependências necessárias:
     ```
     npm install
     ```

3. Inicie a Token API:
   - Execute o seguinte comando para iniciar a Token API:
     ```
     npm start
     ```

## Exemplo de Requisição

Para um exemplo de requisição à Token API, consulte a coleção do Postman fornecida na pasta `collections`. A coleção inclui requisições de amostra e demonstra como interagir com a API para criar NFTs.
