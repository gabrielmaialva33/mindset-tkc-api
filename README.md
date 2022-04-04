<h1 align="center">
  <img src=".github/assets/images/tkc2.png" height="200px" alt="TKC">
</h1>

<p align="center">
  <img src="https://img.shields.io/github/license/gabrielmaialva33/mindset-tkc-api?color=00b8d3?style=flat&logo=appveyor" alt="License" />
  <img src="https://img.shields.io/github/languages/top/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub top language" >
  <img src="https://img.shields.io/github/languages/count/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub language count" >
  <img src="https://img.shields.io/github/repo-size/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="Repository size" >
  <a href="https://github.com/gabrielmaialva33/mindset-tkc-api/commits/master">
    <img src="https://img.shields.io/github/last-commit/gabrielmaialva33/mindset-tkc-api?style=flat&logo=appveyor" alt="GitHub last commit" >
    <img src="https://img.shields.io/badge/made%20by-Maia-15c3d6?style=flat&logo=appveyor" alt="Maia" >  
  </a>
</p>

<br>

<p align="center">
    <a href="README.md">English</a>
    ·
    <a href="README-pt.md">Portuguese</a>
</p>

<p align="center">
  <a href="#bookmark-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-tools">Tools</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#package-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#twisted_rightwards_arrows-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br>

## :bookmark: About

**Diagnostic mindset** is an evaluative research site in order to help people with their mindset.
**[Prototype](https://xd.adobe.com/view/1cd00465-5018-4347-94a0-cea970e02810-4983/)**

<br>

## :computer: Technologies

- **[Typescript](https://www.typescriptlang.org/)**
- **[Node.js](https://nodejs.org/)**
- **[AdonisJS](https://adonisjs.com/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[TSyringe](https://github.com/microsoft/tsyringe/)**
- **[Docker](https://www.docker.com/)**

<br>

## :wrench: Tools

- **[WebStorm](https://www.jetbrains.com/webstorm/)**
- **[Insomnia](https://insomnia.rest/)**
- **[Edge Microsoft](https://www.microsoft.com/en-us/edge/)**
- **[DataGrip](https://www.jetbrains.com/datagrip/)**
- **[Insomnia](https://insomnia.rest)**

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

### :arrow_forward: **Running the application**

- :package: API

```sh
  $ cd mindset-tkc-api
  # Dependencies install.
  $ yarn # or npm install
  # Config environment system
  $ cp .env.example .env
  # Data base creation.
  $ node ace migration:run # or docker-compose up --build 
  # API start
  $ node ace serve --watch # or yarn dev or npm dev
```

<br>

## :twisted_rightwards_arrows: Routes

Get routes for insomnia [Donwload](https://raw.githubusercontent.com/gabrielmaialva33/mindset-tkc-api/master/.github/assets/insomnia/Insomnia.json.zip)

## :memo: License

This project is under the **MIT** license. [MIT](./LICENSE) ❤️

Liked? Leave a little star to help the project ⭐
