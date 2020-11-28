# Brightscript

## Contents

- [Brightscript](#brightscript)
  - [Contents](#contents)
  - [Reference](#reference)
  - [Setup](#setup)
  - [VSCode Extension](#vscode-extension)
  - [Debug Console](#debug-console)
  - [XML SceneGraph](#xml-scenegraph)
  - [Brightscript commands](#brightscript-commands)
  - [Hello World](#hello-world)
  - [Hello World Sample](#hello-world-sample)
  - [Channel](#channel)
  - [Content Feed](#content-feed)
    - [Description](#description)
    - [Playback](#playback)
  - [Content Nodes](#content-nodes)
    - [Descriptive nodes](#descriptive-nodes)
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


## Reference

- Docs https://developer.roku.com/en-gb/overview


- Course https://developer.roku.com/en-gb/videos/courses/rsg/overview.md

- Demos https://go.roku.com/dev-site-demos

- Developers channel https://go.roku.com/roku-dev-channel

- YouTube https://go.roku.com/roku-dev-youtube


## Setup

Developer mode Home 3 Up 2 RLRLR

## VSCode Extension

Using `VSCode` we can run our app

1. Control-Shift-F5 restarts any running app
2. Control-F5 runs the app
3. F5 continues past the first line and shows the app on the screen

or

1. Control-Shift-F5
2. F5 
3. F5

## Debug Console

Also when running an app we should always use the debug console

```powershell
telnet 1.2.3.4 8085
```

## XML SceneGraph

Main scene
  Grid Screen - select content
    Row List
    Label
  Details Screen - details about the content with 'play' button
    Layout Group
    Group
  Episodes Screen
    Episodes Item Screen

Components
  Grid
  Keyboard
  Video content
  Audio Content

## Brightscript commands

```vb
Init()
OnVisibleChanged()
OnItemFocused()
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

## Hello World Sample

Download the Hello World sample from github

components

images

source

Makefile

manifest

## Channel

A Channel contains

- Grid screen which is your home screen
- Details screen which provides details on the series 
- Episode picker
- Adverts
- Subscriptions
- Deep linking into content
 
## Content Feed

### Description
- category
- title
- description
- thumbnail
- releasedate

### Playback
- url
- videoType
- duration

## Content Nodes

- Non renderable
- `data` node
- Maps to feed metadata

### Descriptive nodes
- title
- description
- thumbnail
- releaseDate 

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
