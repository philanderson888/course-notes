## Powershell

### mkcd in Powershell
[alias](#alias)

[functions](#functions)
Create a folder WindowsPowerShell and add it to your Path

```powershell
Function global:mkcd {
  mkdir $args[0]
  cd $args[0]
}
mkcd $args[0]
```

Use an elevated Powershell prompt to set the ExecutionPolicy to RemoteSigned and from now on you can call mkcd test to create a folder test and go into it.

    @ turns off displaying command as it gets executed

    echo text output to scr    @echo off turns off the command permanently

    pause

    goto