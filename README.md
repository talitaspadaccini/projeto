# Projeto React

O objetivo desse projeto é construir uma aplicação que simula o envio de dinheiro para uma outra pessoa, via cartão de crédito.

## Fluxo das telas

Na primeira tela terá uma listagem de usuários, onde a pessoa pode clicar em algum usuário da lista para realizar o pagamento. Quando clicado em um usuário é então aberto um modal de pagamento, contendo as informações do usuário de destino, a opção de selecionar um cartão de crédito e um botão de pagar. O usuário deve então digitar o valor, escolher o cartão e clicar em pagar. Para realização do pagamento deve-se chamar um endpoint de pagamento que aprovará/recusará a transação. E então deve-se mostrar na tela o modal de pagamento concluído com sucesso ou o de erro.

## Screenshots
### Lista de usuários

<img src="https://lh5.googleusercontent.com/mmmufrzVuyW4cVmXEwehKOhM-XewqATN3SRQ5Aq1KczFpXHjQJdzw_1r_Jwuabo9CpyaIohz0kqucA6pGocCG7GFCCqTO_jVXVxPnmahToaFJjBC0ocek1usVrs0FfOx8F8vh1ZT"/>

### Modal de pagamento e listagem de cartões

<img src="https://user-images.githubusercontent.com/61871070/115796928-14481180-a3a9-11eb-9f3e-26df28ff01de.png"/>

### Modal de pagamento concluído com sucesso

<img src="https://user-images.githubusercontent.com/61871070/115796992-3fcafc00-a3a9-11eb-9c76-ee394fdc8fda.png"/>

### Modal de erro no pagamento

<img src="https://user-images.githubusercontent.com/61871070/115797022-4ce7eb00-a3a9-11eb-8d77-ec6157484e32.png"/>

### Cartões para exibir

O cartão válido vai aprovar a transação no backend:

```
let cards = [
  // valid card
  {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
  },
  // invalid card
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
  },
];
```

### Transação

__Endpoint:__ https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989

__Método:__ POST

```
// Payload:

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}
```
*Obs: Por se tratar de um mock o endpoint sempre retornará o mesmo payload, sucesso no pagamento, independente do cartão

### Usuários

__Endpoint:__ https://www.mocky.io/v2/5d531c4f2e0000620081ddce

__Método:__ GET

```
// Payload:

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}
