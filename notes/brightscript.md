# Brightscript

## Contents

- [Brightscript](#brightscript)
  - [Contents](#contents)
  - [Reference](#reference)
  - [Overview](#overview)
  - [Glossary](#glossary)
  - [Video Glossary](#video-glossary)
  - [Coding Guidelines](#coding-guidelines)
  - [Developer Mode](#developer-mode)
  - [Run With VSCode](#run-with-vscode)
  - [Debug Console](#debug-console)
  - [HelloWorld](#helloworld)
  - [Playback nodes](#playback-nodes)
  - [Child Content Node](#child-content-node)
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
  - [Hosting Feed](#hosting-feed)
  - [video format](#video-format)
  - [OnKeyEvent()](#onkeyevent)
  - [m fields and methods](#m-fields-and-methods)
  - [fields](#fields)
  - [methods](#methods)
  - [iterate over videos](#iterate-over-videos)
  - [closing a screen](#closing-a-screen)
  - [show video screen](#show-video-screen)
  - [Channel](#channel-1)
  - [Display videos](#display-videos)
  - [Components](#components-1)
  - [Scenegraph](#scenegraph)
  - [methods](#methods-1)


## Reference

- Docs https://developer.roku.com/en-gb/overview
  
- Brightscript https://developer.roku.com/en-gb/docs/references/brightscript/language/brightscript-language-reference.md

- Course https://developer.roku.com/en-gb/videos/courses/rsg/overview.md

- Demos https://go.roku.com/dev-site-demos

- Developers channel https://go.roku.com/roku-dev-channel

- YouTube https://go.roku.com/roku-dev-youtube

- Developer Forums
  
- Knowledge Center




## Overview

- written in C
- Interprets straight into bytecode at runtime
- Objects are associative arrays which have key/value pairs
- Interfaces
- Integers are default number
- dynamic types are OK
- static types are also OK
  
## Glossary
- XDK
    - HTML/JS framework with MVC for UI
- TAL
    - Television Abstraction Layer by BBC
- List Of Acronyms
    - https://accedobroadband.jira.com/wiki/spaces/AP/pages/97190141/Terms+and+acronyms
- POC proof of concept
- RAF Roku Ad Framework
    - Roku_Ads.brs
- OVP Online Video Playser
- roSGScreen   Roku SceneGraph Screen
- - Channel
    - Content Feed is ? all xml data to do with ? all videos in channel ?
        - Parent Node
            - Child Node has individual video details
                - can create programatically from video files
- OS
    - 9.4
        - AirPlay2 support : ios device to play on Roku device
        - Homekit control via Home app and Siri
        - Apple Homekit https://www.apple.com/uk/shop/accessories/all-accessories/homekit
    - 9.1
        - guest mode
        - signal beacon is required to measure the time to fully render the home screen, from the moment the user requests it (20 seconds)
        - instant signup
            - mandatory for channels with > 10 million hours in 3 months.
- Channel Store https://channelstore.roku.com/en-gb/browse
- Search
    - Voice search
    - Instant Signup
    - Featured Free
    - Zone = row of related content
    - My Feed
- Content Engagement Program
    - Search
    - Instant signup
    - Featured free
    - Audience Development Program
        - Self serve roku home screen display ads
- Monetisation
    - Ad-supported channels
    - Subscription SVOD monthly
    - Transactional channel
        - Pay to install
        - In-app purchases
        - Roku gets 20%
- Developer Dashboard
- SceneGraph like the HTML
- Analytics
    - Metrics
        - Sumo Metrics
            - How long between button press and display item
    - Trends
    - Health
- Security
    - Apps are sandboxed
    - SSL
    - Each system is uniquely keyed at the factory
- Bandwidth Throttling
    - Charles
- Bitrate reporting
    - m.player.streamingSegment
    - m.player.streamInfo
- Publish - sideload then encrypt package
- SVOD Subscription Video On Demand
- TVOD Transactional Video On Demand pay per item
- PVOD Premium Video On Demand
- AVOD Advertising Video On Demand free with adverts
- OTT via browser
- MRSS Media RSS feed
- trick play indexes scenes
- BIF files
- DASH
- HLS

## Video Glossary

- HRD High dynamic range
    - Higher is better and brighter
    - HDR10
    - HDR10+
    - HLG for TV station
    - Dolby Vision adds extra metadata on every frame so better sound quality
- 4K = UHD Ultra High Definition = pixel count
- 1 NIT = 1 Candela per square metre
- Candela = light emitted in a particular direction BUT based on Human Perception!?!?
- Lumens = total amount of light emitted in every direction

## Coding Guidelines

- 4 spaces = 1 tab
- ' 
- camelCase
- CONSTANTS_LIKE_THIS
- m.CONSTANTS
- ClassLikeStructures
- array = []
- assocArray = {}
- and, then, etc
- Object, String etc
- sub()  = void function
- function DoThis as Object   has return type
- do not abbreviate
- use early return
- log.brs
    - m.logger = getLogging("fileName")
    - m.logger.info("Log this","DEBUG")
- comments
    - fileName:function - extra info
- onKeyEvent listener - keep all the logic for this in one place,rather than on grid components
- message loops in preference to tasks !?!?!?!
- ' # TODO


## Developer Mode

Developer mode Home 3 Up 2 RLRLR

## Run With VSCode

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


## HelloWorld

- \components
- \images
- \source
- Makefile
- manifest

MainScene.xml

```vb 
<script type="text/brightscript" uri="...brs" />
<children>
  <Overhang id="overhand" showOptions="false" showClock="false" logoUrl="..." 
    translation="[0,60]" />
  <Label id=".." text="..loading" width.. height..  translation="[0,0]" 
    horizAlign="center" vertAlign="center" visible="false" font="font:.." />
```

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


## Playback nodes
- streamUrl
- streamFormat
- length

## Child Content Node
- has the actual videos



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
  - row
    - thumbnail = poster
      - focus
        - highlighted
        - name
        - duration
        - description- list 
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



## Hosting Feed

- website
- CDN
- OVP Online Video Platform
- 
- ## video hosting

- website
- cdn
- ovp online video platform

## video format

https://developer.roku.com/en-gb/docs/specs/specs-overview.md

- dash (preferred)
- hls (preferred)
- smooth
- m4v
- mov
- mp4

provide multiple videos of varying quality 500 to 4000kbps and document them in the manifest

video chunks 
- dash 4-6 seconds
- smooth 2 seconds

captions
- sideload from url
- embed url in manifest
- fragment as chunks with url in manifest

## OnKeyEvent() 

Triggered when a key is pressed from the remote control

```vb
function OnKeyEvent(key as String, press as Boolean) as Boolean
  result = false
  if press
    if key = "back"
      CloseScreen()
      result = true
    end if
  end if
  return result
```


## m fields and methods

```vb
m.top.backroundColor = "0xFFEEDD"
m.top.backgroundUri = "pkg:/images/picture.png"
m.loadingIndicator
' number of screens open
m.screenStack.Count()
```

## fields

```vb
' index of selected video in a row of videos
itemIndex
```

## methods

```vb
' number of child nodes
content.GetChildCount()
' select multiple videos
content.GetChildren(initialIndex,numberOfItems)
```

## iterate over videos

```vb
children=content.GetChildren(0,numberOfItems)
childrenClone = []
for each child in children
  childrenClone.Push(child.Clone(false))
```


 ## closing a screen

 ```vb
CloseScreen() 
 ```
   
## show video screen

```vb
sub ShowVideoScreen(content as Object, itemIndex as Integer)
  m.videoPlayer = CreateObject("RoSGNode","Video")
```

## Channel

- Grid Screen = Home Screen
- Details Screen = Series
- Episode Picker
- Adverts
- Subscriptions
- Deep link to content
    - curl -d http://<your roku IP address>:8060/launch/dev?contentID=13234&MediaType=season
- Content Feed
    - Descriptive node
        - Category
        - Title
        - Description
        - Thumbnail
        - ReleaseDate
    - Playback
        - url
        - videoType
        - duration
    - Content Nodes
        - Non renderable
        - data node
    - Playback node
        - streamurl
        - streamFormat
        - length
    - Child content node
        - has the actual videos

## Display videos

Root = screen
Child = movie

```vb
for each movie in row
  child = root...createChild
end for
```

## Components

    - renderable
        - containers
            - grid
                - row
                    - label
            - list
            - panel
        - rectangle
        - label
        - poster
        - button
        - dialog
        - keyboard
        - video content
        - audio content
    - non-renderable
        - timer
        - animation
        - content

## Scenegraph

- Main scene
    - Grid
        - Row
            - Label
    - Details
        - Layout group
    - Episodes
        - Episodes Item
    - overhang
    - showOptions
    - showClock
    - logoUrl
    - translation
- Manifest
    - major, minor, build


## methods

```vb
Init()
OnVisibleChanged()
OnItemFocused()
```




