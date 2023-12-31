# brightscript

## content

- [brightscript](#brightscript)
  - [content](#content)
  - [introduction](#introduction)
  - [telnet](#telnet)

## introduction

roku brightscript is quite an uncertain beast and there is a lot to learn if one is going to build a tv app

## telnet

in order to debug a terminal session one can install telnet

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install telnet
```

then get the ip of your roku device and connect to it

```bash
telnet ip-of-roku-device 8085
```
