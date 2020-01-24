# Virtual Reality Meeting Environment Project Website

Team 11:

- Jieyou Xu
- Yingming Luo
- Wenxin Wang

## Install Dependencies

This project assumes that you have `node` (v13) + `yarn` installed. This
project also assumes a Unix/MacOS OS.

We use [yarn](https://yarnpkg.com/lang/en/) as the package manager for 
`node.js`.

```bash
yarn install
```

## Run Development Server

Supports file watch mode (you can edit the markdown sources and the server will
automatically reload on changes observed).

```bash
yarn start
```

## Build and Generate Static Site

For deployment purposes, the static site can be generated and easily packaged
to be served statically.

```bash
yarn build
```

The web page can be opened at `index.html`.

## Serve Production Site

```bash
yarn serve
```

## Clean

To clean the generated `dist` directory, run

```bash
yarn clean
```
