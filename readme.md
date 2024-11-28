# Angular JIT error in some cases of using web workers

This repository is a very simple project to show that JIT errors (`Error: JIT compiler unavailable`) can occur when working with web workers in Angular in case of using index.ts files.

The error does not occur when using `ng serve`, so I use `http-server` to show the error. I have used PNPM, so I have the following commands to reproduce the error:

- `pnpm i`
- `pnpm build`
- `pnpm use`

The last command will run a server on some `localhost:80xx` port. There the debug console will show the error occuring in the web worker, while it should actually log `2468`.
