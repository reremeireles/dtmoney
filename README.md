# 💰 DT Money

## 💡 Projeto

Desenvolvimento de uma aplicação utilizando ReactJS. O DT Money é uma aplicação WEB de controle de finanças pessoais mais focada na interface e com o objetivo de aprender os fundamentos e boas práticas do Front-end. 
#### A aplicação contém as funcionalidades de:
  - cadastro de nova transação,
  - controle de entrada e saída de dinheiro,
  - organização das transações por data,
  - categorização das novas transações.

Acesse o deploy do projeto: https://dtmoney-reremeireles.vercel.app/

## 💻 Tecnologias e Bibliotecas

- ReactJS
- Typescript
- Styled Components
- MirageJS
- React Modal 
- Polished (pacote de estilizações adicionais)

## 👩‍💻 Conceitos aplicados no projeto

- Exportação de assets do Figma
- Criação de estilos globais com o Styled Components
- Componetização 
- Consumo de API utilizando uma fake API com o MirageJS
- Hooks
  - useEffect
  - useState
  - useContext
- Criação de modal utilizando React Modal
  - openModal
  - closeModal
- Salvar os dados da nova transação na API e mostrar em tela a nova transação
- Consumo do banco de dados do MirageJS
  - schema.create
  - models
- Imutabilidade
- Consumo do Contexto
  - o contexto tem como premissa acessar uma mesma informação através de vários componentes da aplicação, independentemente do nível hierárquico desses componentes. Geralmente, o contexto é usado quando a aplicação tem uma situação em que é preciso compartilhar um estado um pouco mais complexo entre vários componentes da aplicação.
