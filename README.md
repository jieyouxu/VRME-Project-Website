# Virtual Reality Meeting Environment Project Website

Team 11:

- Jieyou Xu
- Yingming Luo
- Wenxin Wang

## Install Dependencies

This project assumes that you have `node` (v13) + `yarn` installed.

We use [yarn](https://yarnpkg.com/lang/en/) as the package manager for `node
.js`.

```bash
yarn install
```

## Run Development Server

Supports file watch mode (you can edit the markdown sources and the server will
automatically reload on changes observed).

```bash
yarn server
```

## Build and Generate Static Site

For deployment purposes, the static site can be generated and easily packaged
to be served statically.

```bash
yarn build
```

This command generates the static website at `/public`.

To clean generated directories and files, run

```bash
yarn build
```

## Deployment

No CI/CD currently configured, but the generated site at `/public` can be
statically served.
