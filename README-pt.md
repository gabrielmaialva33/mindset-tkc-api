<h1 align="center">
  <img src=".github/assets/images/tkc2.png" height="200px" alt="TKC">
</h1>

<p align="center">
  <img src="https://img.shields.io/github/license/gabrielmaialva33/mindset-tkc-api?color=00b8d3?style=flat&logo=appveyor" alt="License" />
  <img src="https://img.shields.io/github/languages/top/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub top language" >
  <img src="https://img.shields.io/github/languages/count/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub language count" >
  <img src="https://wakatime.com/badge/user/e61842d0-c588-4586-96a3-f0448a434be4/project/df914052-b43f-4e57-bb1f-42dc3c59d9ab.svg?style=flat&logo=appveyor" alt="Repository size" >
  <img src="https://img.shields.io/github/repo-size/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="Repository size" >
  <a href="https://github.com/gabrielmaialva33/mindset-tkc-api/commits/master">
    <img src="https://img.shields.io/github/last-commit/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub last commit" >
    <img src="https://img.shields.io/badge/feito%20por-Maia-15c3d6?style=flat&logo=appveyor" alt="Maia" >
  </a>
</p>

<br>

<p align="center">
    <a href="README.md">English</a>
    ·
    <a href="README-pt.md">Portuguese</a>
</p>

<p align="center">
  <a href="#bookmark-about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-tools">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#package-installation">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#twisted_rightwards_arrows-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#memo-license">Licença</a>
</p>

<br>

## :bookmark: Sobre

**Diagnóstico mindset** é um site de pesquisa avaliativa para ajudar as pessoas com sua mentalidade.
**[Protótipo](https://xd.adobe.com/view/1cd00465-5018-4347-94a0-cea970e02810-4983/)**
<br>

<kbd>
  <img src=".github/assets/images/schema.svg" alt="schema">
</kbd>

## :computer: Tecnologias

- **[Typescript](https://www.typescriptlang.org/)**
- **[Node.js](https://nodejs.org/)**
- **[AdonisJS](https://adonisjs.com/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[TSyringe](https://github.com/microsoft/tsyringe/)**
- **[Docker](https://www.docker.com/)**

<br>

## :wrench: Ferramentas

- **[WebStorm](https://www.jetbrains.com/webstorm/)**
- **[Insomnia](https://insomnia.rest/)**
- **[Edge Microsoft](https://www.microsoft.com/pt-br/edge/)**
- **[DataGrip](https://www.jetbrains.com/datagrip/)**
- **[Insomnia](https://insomnia.rest)**

<br>

## :package: Instalação

### :heavy_check_mark: **Pré-requisitos**

Os seguintes softwares devem estar instalados:

- **[Node.js](https://nodejs.org/en/)**
- **[Git](https://git-scm.com/)**
- **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**
- **[PostgreSQL](https://www.postgresql.org/download/)** or **[Docker](https://www.docker.com/get-started/)**

<br>

### :arrow_down: **Clonando o repositório**

```sh
  $ git clone https://github.com/gabrielmaialva33/mindset-tkc-api.git
```

<br>

### :arrow_forward: **Rodando o backend**

- :package: API

```sh
  $ cd mindset-tkc-api
  # Instalação de dependências.
  $ yarn # ou npm install
  # Configuração ambiente de sistema
  $ cp .env.example .env
  # Criação de banco de dados.
  $ node ace migration:run # ou docker-compose up --build
  # Iniciar API
  $ node ace serve --watch # ou yarn start ou npm dev
```

<br>

## :twisted_rightwards_arrows: Routes

Arquivo de rotas [Donwload](https://raw.githubusercontent.com/gabrielmaialva33/mindset-tkc-api/master/.github/assets/insomnia/Insomnia.json.zip)

## :memo: Licença

O projeto está sobre a licença [MIT](./LICENSE) ❤️

Gostou? Deixe uma estrela para ajudar o projeto ⭐
