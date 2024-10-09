
## design

https://colorhunt.co/palettes/pastel

https://www.manypixels.co/gallery

https://excalidraw.com/

## docs

Documentation - beautify your source code
https://carbon.now.sh/

Documentation - embed code with CodePen
[https://codepen.io](https://codepen.io/)

Documentation - create ReadMe
https://readme.so/editor

Explains shell commands
[https://explainshell.com](https://explainshell.com/)

Images - free - unsplash
[https://unsplash.com](https://unsplash.com/)

Image Compression - Tiny PNG
[https://tinypng.com](https://tinypng.com/)

Image Editing Online
[https://www.photopea.com](https://www.photopea.com/)

Images - Icons
[https://ionic.io](https://ionic.io/)

Image - Remove Background
[https://www.remove.bg](https://www.remove.bg/)

Performance
Web page speed    [https://pagespeed.web.dev](https://pagespeed.web.dev/)

Performance - loading times
[https://gtmetrix.com](https://gtmetrix.com/)



## scripting

```bash
export PATH=$PATH:/Users/Shared/android
export PATH=$PATH:/Users/Shared/flutter/bin
export PATH=$PATH:~/.pub-cache/bin
alias chrome=open -a "Google Chrome"
alias edge=open -a "Microsoft Edge"
alias gohome=cd /Users/Shared/
alias myip=curl 1.2.3.4

export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"

function mkcd()   {    mkdir -p "$@" && cd "$@"                            }
function gitpush(){    git add . &&    git commit -m "$@" &&    git push   }
function gitTag() {    git tag -a "$1" -m "$2" &&  git push origin --tags  }

# or is it this - mkcd () {     mkdir "$1"      cd "$1"   }

source "~/.aliases.sh"

# bun completions
[ -s "/Users/phil/.bun/_bun" ] && source "/Users/phil/.bun/_bun"
# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

clear terminal
clear && printf '\\e[3J'

```

