# zsh

## contents

- [zsh](#zsh)
  - [contents](#contents)
  - [intrduction](#intrduction)
  - [reference link](#reference-link)
  - [zsh - Z Shell : Custom Shell for MAC](#zsh---z-shell--custom-shell-for-mac)
    - [Installing](#installing)
    - [Using](#using)
  - [Oh My Zsh](#oh-my-zsh)

## intrduction

zshell is a custom shell for linux/mac  users

## reference link

[ZSH = Z Shell](https://ohmyz.sh/)

## zsh - Z Shell : Custom Shell for MAC

Find and edit the shell commands from the root of the home directory - the `.zshrc` file

```
nano .zshrc
```



### Installing

```js
sudo apt-get update
# install zsh
sudo apt-get install -y zsh
# check the version
zsh --version
```

### Using

We can switch between `zsh` and `bash` just by typing `zsh` or `bash` in the terminal.

## Oh My Zsh

```
# install
sh -c "$(curl -fsSL 
   https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```