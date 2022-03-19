<h1 style="text-align: center;">
  <img src="https://www.tkcbusiness.com.br/uploads/logotipo.png?t=1619470606" height="100px" alt="Happy">
</h1>



<div style="text-align: center;">
  <img src="https://img.shields.io/github/license/gabrielmaialva33/mindset-tkc-api?color=00b8d3?style=flat&logo=appveyor" alt="License" />
  <img src="https://img.shields.io/github/languages/top/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub top language" >
  <img src="https://img.shields.io/github/languages/count/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub language count" >
  <img src="https://img.shields.io/github/repo-size/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="Repository size" >
  <a href="https://github.com/gabrielmaialva33/mindset-tkc-api/commits/master">
    <img src="https://img.shields.io/github/last-commit/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub last commit" >
  <img src="https://img.shields.io/badge/feito%20por-Maia-15c3d6?style=flat&logo=appveyor" alt="Maia" >
  </a>
</div>

<br>

<div style="text-align: center;">
    <a href="README.md">English</a>
    ·
    <a href="README-pt.md">Portuguese</a>
</div>

<div style="text-align: center;">
  <a href="#bookmark-about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-tools">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#package-installation">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>
</div>
<br>

## :bookmark: About

**Diagnostic mindset** is an evaluative research site in order to help people with their mindset.

<br>

## :computer: Technologies

-  **[Typescript](https://www.typescriptlang.org/)**
-  **[Node.js](https://nodejs.org/)**
-  **[AdonisJS](https://adonisjs.com/)**
-  **[PostgreSQL](https://www.postgresql.org/)**
-  **[TSyringe](https://github.com/microsoft/tsyringe/)**

<br>

## :wrench: Tools

- **[WebStorm](https://www.jetbrains.com/webstorm/)**
- **[Insomnia](https://insomnia.rest/)**
- **[Edge Microsoft](https://www.microsoft.com/en-us/edge/)**
- **[DataGrip](https://www.jetbrains.com/datagrip/)**

<br>

## :package: Installation

### :heavy_check_mark: **Prerequisites**

The following software must be installed:

- **[Node.js](https://nodejs.org/en/)**
- **[Git](https://git-scm.com/)**
- **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**
- **[PostgreSQL](https://www.postgresql.org/download/)** or **[Docker](https://www.docker.com/get-started/)**

<br>

### :arrow_down: **Cloning the repository**

```sh
  $ git clone https://github.com/gabrielmaialva33/mindset-tkc-api.git
```

<br>

### :arrow_forward:	**Running the applications**

- :package: API

```sh
  $ cd mindset-tkc-api
  # Dependencies install.
  $ yarn # or npm install
  # Config environment system
  $ cp .env.example .env
  # Data base creation.
  $ node ace migration:run
  # API start
  $ node ace serve --watch # or yarn dev or npm dev
```

<br>

## :memo: License

This project is under the **MIT** license. [MIT](./LICENSE) ❤️

Liked? Leave a little star to help the project ⭐
