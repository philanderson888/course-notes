# brightscript

## content

- [brightscript](#brightscript)
  - [content](#content)
  - [introduction](#introduction)
  - [telnet](#telnet)
  - [getting started](#getting-started)

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

## getting started

to get started with brightscript we can use vscode and launch our app using a `launch.json` file that would be great

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "BrightScript Debug: Launch",
            "type": "brightscript",
            "request": "launch",
            "host": "192.168.87.44",
            "password": "rokudev",
            "rootDir": "${workspaceFolder}"
        }
    ]
}
```


