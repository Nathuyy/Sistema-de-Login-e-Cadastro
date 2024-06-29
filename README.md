# API de Autenticação e Gerenciamento de Usuários

## Descrição

Esta API oferece funcionalidades de login, registro e gerenciamento de usuários. Ela foi desenvolvida usando Node.js, Express e bcryptjs para hash de senhas, com o MySQL como banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para Node.js, utilizado para construir a API.
- **bcryptjs**: Biblioteca para hashing de senhas.
- **MySQL**: Banco de dados relacional utilizado para armazenar informações dos usuários.

## Funcionalidades

### 1. `loginUser`

- **Descrição**: Autentica um usuário com base no email e senha fornecidos.
- **Rota**: `POST /login`
- **Parâmetros**: 
  - `email`: Email do usuário.
  - `password`: Senha do usuário.

### 2. `registerUser`

- **Descrição**: Registra um novo usuário no sistema.
- **Rota**: `POST /register`
- **Parâmetros**: 
  - `username` (string): Nome do usuário.
  - `email`: Email do usuário.
  - `password`: Senha do usuário.

### 3. `getAllUsers`

- **Descrição**: Retorna uma lista de todos os usuários. Esta rota é restrita a administradores com IDs 1 ou 2.
- **Rota**: `GET /users`
- **Parâmetros**: 
  - `adminId` (number): ID do usuário solicitante (somente IDs 1 ou 2 têm acesso).

### 4. `deleteUser`

- **Descrição**: Deleta um usuário especificado. Esta rota é restrita a administradores com IDs 1 ou 2.
- **Rota**: `DELETE /deleteUser/:id/remove/:idUser`
- **Parâmetros**: 
  - `idUser`: ID do usuário a ser deletado.
  - `id`: ID do usuário solicitante (somente IDs 1 ou 2 têm acesso).

### 5. `updateUser`

- **Descrição**: Atualiza as informações de um usuário.
- **Rota**: `PUT /user/:id`
- **Parâmetros**: 
  - `id` (number): ID do usuário a ser atualizado.
  - `username` (string, opcional): Novo nome do usuário.
  - `email` (string, opcional): Novo email do usuário.
  - `password` (string, opcional): Nova senha do usuário.
