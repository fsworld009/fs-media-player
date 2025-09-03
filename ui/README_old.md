# FS Media Player

I might change the project name later.

## Development

### Install

```
npm install -g pnpm@latest-10
pnpm i --frozen-lockfile
```


## Ref

* https://medium.com/@5tigerjelly/creating-a-chrome-extension-with-react-and-vite-boilerplate-provided-db3d14473bf6
* https://dev.to/cassidoo/how-to-test-a-browser-extension-locally-4bne
* https://stackoverflow.com/questions/42105984/cannot-find-name-console-what-could-be-the-reason-for-this
* https://stackoverflow.com/questions/71542944/chrome-extension-opening-in-new-tab
* https://medium.com/@josprima.id/setup-reactjs-typescript-project-with-vite-eslint-and-prettier-2024-e714f7daca1a


## Known Issue

### Tailwind Material compatibility

As of now it only supports Tailwind@3 and React@18 but current stable version is
Tailwind@4 and React@19 https://github.com/creativetimofficial/material-tailwind/blob/6f8c0ff/package.json

It seems working with Tailwind@4 for most part for now but there's discussion
https://github.com/creativetimofficial/material-tailwind/issues/955


With react@19, correctly there's issue with TS type checking
https://github.com/creativetimofficial/material-tailwind/issues/830
Pending https://github.com/creativetimofficial/material-tailwind/pull/864

Workaround for now https://github.com/creativetimofficial/material-tailwind/issues/379#issuecomment-2688527829
https://github.com/creativetimofficial/material-tailwind/pull/864/files

### Unable to inject Youtube iframe API in chrome extension

```
Refused to load the script 'https://www.youtube.com/iframe_api' because it violates the following Content Security Policy directive: "script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' http://localhost:* http://127.0.0.1:*". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
```

"In Manifest V3, all of your extension's logic must be part of the extension package. You can no longer load and execute remotely hosted files." 
https://stackoverflow.com/a/75196361



Change policy, this only works in v2
https://stackoverflow.com/a/68749937

Note: Injecting extenal script to content page isn't allowed in the extension's page 
   1. https://stackoverflow.com/a/63780515
   2. https://stackoverflow.com/a/36645710 


Looks like this project can't be done as a browser extension


## TODO / Discussion

* Open new tab only once https://stackoverflow.com/questions/71918972/in-a-chrome-extension-detect-tab-already-open-and-switch-to-it-otherwise-crea
  * Should we do this?
  * This seems missing management on tab closing
* Cross browser support https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
