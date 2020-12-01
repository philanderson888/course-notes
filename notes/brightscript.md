# Brightscript

## Contents

- [Brightscript](#brightscript)
  - [Contents](#contents)
  - [Reference](#reference)
  - [Setup](#setup)
  - [VSCode](#vscode)
  - [Debug Console](#debug-console)
  - [Hello World](#hello-world)
    - [Playback nodes](#playback-nodes)
    - [Child Content Node](#child-content-node)
  - [Display videos](#display-videos)
  - [Hosting Feed](#hosting-feed)
  - [Debug Console](#debug-console-1)
  - [Scope](#scope)
  - [Syntax](#syntax)
  - [Types](#types)
  - [Literals](#literals)
  - [Array](#array)
  - [object](#object)
  - [operators](#operators)
  - [function](#function)
  - [components](#components)
  - [display components](#display-components)
  - [content feed](#content-feed)
  - [channel](#channel)
  - [content node](#content-node)


## Reference

- Docs https://developer.roku.com/en-gb/overview
  
- Brightscript https://developer.roku.com/en-gb/docs/references/brightscript/language/brightscript-language-reference.md

- Course https://developer.roku.com/en-gb/videos/courses/rsg/overview.md

- Demos https://go.roku.com/dev-site-demos

- Developers channel https://go.roku.com/roku-dev-channel

- YouTube https://go.roku.com/roku-dev-youtube

- Developer Forums
  
- Knowledge Center


## Setup

Developer mode Home 3 Up 2 RLRLR

## VSCode

Using `VSCode` we can run our app

1. Control-Shift-F5 restarts any running app
2. Control-F5 runs the app
3. F5 continues past the first line and shows the app on the screen

or

1. Control-Shift-F5
2. F5 
3. F5

launch.json

```json
{
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations":[ 
        {
            "type": "brightscript",
            "request": "launch",
            "name": "BrightScript Debug: Launch",
            "stopOnEntry": true,
            "host": "192.168.87.249",
            "password": "rokudev",
            "rootDir": "${workspaceFolder}/brightscript/hello-world-04",
            "enableDebuggerAutoRecovery": false,
            "stopDebuggerOnAppExit": false
        }
    ]   
}
```

## Debug Console

```powershell
telnet 1.2.3.4 8085
```


## Hello World

Create `GridScreen` project with `components` `images` `source` and `manifest` file in the root

```vb
GridScreen
  
    MainScene.xml
      <script type="text/brightscript" uri="...brs" />
      <children>
        <Overhang id="overhand" showOptions="false" showClock="false" logoUrl="..." 
          translation="[0,60]" />
        <Label id=".." text="..loading" width.. height..  translation="[0,0]" 
          horizAlign="center" vertAlign="center" visible="false" font="font:.." />
  
    MainScene.brs

    GridScreen/
    DetailsScreen/

  source

    main.brs

      holds main programming for the scene
      main()


  images

  manifest

    title
    major_version
    minor_version
    build_version
    mm_icon_focus_hd
    splash_screen_hd
    ui_resolutions=hd
  
  Scene = container
    poster = image
    label = text

  Fonts/

  Certificates/

  MakeFile


```

source\main.brs 

```vb
sub Main()
  ShowChannelRSGScreen()
end sub

sub ShowChannelRSGScreen()
  ' canvas '
  screen=CreateObject("roSGScreen")
  ' events sent to a port '
  m.port = 
  ' get XML '
  scene = scree.CreateScene("MainScene")
  screen.Show()

  ' event loop
  while(true)
      ' wait 0 seconds
      msg=wait(0,m.port)
      ' type of object which generated the event
      msgType=type(msg)
      if(msgType="roSGScreenEvent)
        if msg.IsScreenClosed() then return
      end if 
  end while
end sub
```

components\MainScene.brs

```vb
' initialize
sub Init()
  ' background '
  m.top.backgroundColor = "0x..."
  m.top.backgroundUri=""
  m.loadingIndicator=m.top.FindNode("loadingIndicator") 
  InitScreenStack()
  ShowGridScreen()
  ' get content
  RunContentTask()
end sub
```

now creates components\UILogic folder and init


### Playback nodes
- streamUrl
- streamFormat
- length

### Child Content Node
- has the actual videos

## Display videos

Root = screen
Child = movie

```vb
for each movie in row
  child = root...createChild
end for
```

## Hosting Feed

- website
- CDN
- OVP Online Video Platform

## Debug Console

```powershell
telnet 1.2.3.4 8085
```

## Scope

x is local scope only
m.x is component scope valid in the whole component

```vb
sub doThis()
  x=1
  m.x=100
```

## Syntax

: can separate multiple commands on one line

Optional Type Suffix

```vb
a_string$
// int
10%
// float
2.34!
// double
2.45678900#
```


## Types

- Boolean
- Int 32
- LongInteger 64
- Float 32
- Double 64
- String 
- Object
  - roArray
  - roAssociativeArray
  - roList
  - roVideoPlayer
- Function has return type
- Sub has void return
- Interface
- Interface with 'dot operator' must be static
- Invalid = 'invalid'
- dynamically assigned
  - 1 = integer
  - 2.0 = float
  - "hi"   = string
  - if reallocated then type can change unless has type character suffix
- 

## Literals

```vb
'  "" is an escaped quotation mark
"" 
```
Hex

```vb
' is Hex for 255
&HFF
```

Float
```vb
1.23E10
```

Double

```vb
1.23D-12
```

Long 64

```vb
123&
```

LINE_NUM  





## Array

```vb
myArray = []
myArray = [1,2,3]
myArray = [
  1
  2
  3
]
myArray = [
  1,
  2,
  3
]
```

```vb
function Main() as Void 
    dim cavemen[10] 
    cavemen.push("fred")
    cavemen.push("barney")
    cavemen.push("wilma")
    cavemen.push("betty") 
    for each caveman in cavemen
        print caveman
    end for 
end function
```

## object

```vb
myObj = {}
myObj = {
  key:"value",
  key2:"value2",
  key3:function01
}
```

## operators

```vb
' MOD
MOD
```

## function

```vb
function five() as Integer
  return 5
end function
print five()
```

## components

- list
- vector array
- associative array
- object

methods

-foreach

## display components

- grid
- list 
- panel


## content feed

- typically contains hundreds or even thousands of content items
- id
- name
- description
- thumbnail
- url
- tags
- genre

## channel

- home page
- details page 

## content node

grid (xml)

  root (xml created in brightscript)

    child (xml created in brightscript)

```vb
' root
root = createObject("RoSGNode","ContentNode")
' child
child = root.createChild("ContentNode")
child.title
child.description
child.streamUrl
child.streamFormat
' add content to SceneGraph
sgComponent.content = root
```

map each video in a series

all metadata for each movie is stored in a child content node 

```vb
' channel
row.title="My Channel"
for each movie in row
  child = root.createChild("ContentNode")
  child.title=movie.title
  ....
end for
```

content node metadata  maps to content feed fields

content node maps metadata in content feed to each of the SceneGraph components in your channel 

- non-renderable
- data node
- maps to data in your content feed

