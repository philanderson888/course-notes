# components

## Contents

- [components](#components)
  - [Contents](#contents)
  - [manifest](#manifest)
  - [components](#components-1)
  - [display components](#display-components)
  - [interface](#interface)
  - [content feed](#content-feed)
  - [channel](#channel)
  - [content node](#content-node)
  - [events](#events)
    - [typical event loop](#typical-event-loop)
    - [event types](#event-types)
  - [OnKeyEvent()](#onkeyevent)
  - [m fields and methods](#m-fields-and-methods)
  - [fields](#fields)
  - [methods](#methods)
  - [layout](#layout)
  - [flow](#flow)
  - [xml to brightscript](#xml-to-brightscript)
  - [samples](#samples)
  - [iterate over videos](#iterate-over-videos)
  - [closing a screen](#closing-a-screen)
  - [show video screen](#show-video-screen)
  - [Channel](#channel-1)
  - [Display videos](#display-videos)
  - [Components](#components-2)
  - [Scenegraph](#scenegraph)
  - [methods](#methods-1)


## manifest

Channel root always contains a manifest

- name
- version
- channel icon
- splash screen image

```vb
# Channel
title=Title
subtitle=SubTitle
major_version=1
minor_version=1
build_version=1
# Assets
image1=pkg:/images/showthis.png
# splash
splash=pkg:/images/splash.png
# resolution
ui_resolutions=fhd
# screensaver
...
# extra
confirm_partner_button=1
```


https://developer.roku.com/en-gb/docs/developer-program/getting-started/architecture/channel-manifest.md


## components

one <component> element per file

inside this may have

- interface
- <script></script>
- <children></children>

eg

- list
- vector array
- associative array
- object

https://developer.roku.com/en-gb/docs/references/scenegraph/xml-elements/component.md

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

## interface

- encapsulates internal fields
- exposes public <field> elements
- allows instances to be created
- exposes functional fields <function> elements https://developer.roku.com/en-gb/docs/developer-program/core-concepts/handling-application-events.md#HandlingApplicationEvents-FunctionalFields

  

https://developer.roku.com/en-gb/docs/references/scenegraph/xml-elements/interface.md

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


## events

https://developer.roku.com/en-gb/docs/developer-program/core-concepts/event-loops.md

event = message

when button is clicked an `event` or `message` is created

event loop

```vb
while true
    ' wait for an event
    ' process the event
end while
```

event message type is `roMessagePort`

### typical event loop

```vb
port = CreateObject("roMessagePort")
screen = CreateObject("roSpringboardScreen")
screen.SetMessagePort(port) ' instruct screen to send events to port
screen.Show()
while true
    msg = wait(0, port) ' wait for a message
    if type(msg) = "roSpringboardScreenEvent" then
        if msg.isScreenClosed() then
            return -1
        elseif msg.isButtonPressed()
            print "button pressed: ";msg.GetIndex()
        else
            ' ignore other unknown or uninteresting roSpringBoardScreenEvents
        endif
    else
        ' ignore other events, not type roSpringboardScreenEvent
    endif
end while
```

### event types

```vb
isListItemSelected() as Boolean
isScreenClosed() as Boolean
isListFocused() as Boolean
isListSelected() as Boolean
isListItemFocused() as Boolean
isButtonPressed() as Boolean
isPlaybackPosition() as Boolean
isRemoteKeyPressed() as Boolean
isRequestSucceeded() as Boolean
isRequestFailed() as Boolean
isRequestInterrupted() as Boolean
isStatusMessage() as Boolean
isPaused() as Boolean
isResumed() as Boolean
isCleared() as Boolean
isPartialResult() as Boolean
isFullResult() as Boolean
isAdSelected() as Boolean
isStorageDeviceAdded() as Boolean
isStorageDeviceRemoved() as Boolean
isStreamStarted() as Boolean
isListItemInfo() as Boolean
isButtonInfo() as Boolean
```


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

https://developer.roku.com/en-gb/docs/references/scenegraph/component-functions/onkeyevent.md

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

## layout

https://developer.roku.com/en-gb/docs/developer-program/core-concepts/controlling-screen-layout.md

- translation = x,y
- z-order 
- parent-child to group elements with `Group` and `LayoutGroup`
  

## flow

https://developer.roku.com/en-gb/docs/developer-program/core-concepts/controlling-screen-program-flow.md

- key press
- data arrival
- z-order
- parent-child
- creating and deleting elements
- hiding and showing elements
- focus/blur elements

## xml to brightscript

xml `PosterGrid` matches `roPosterScreen`

## samples

grid

https://github.com/rokudev/scenegraph-master-sample/tree/master/GridScreen

simple grid

https://github.com/rokudev/samples/blob/master/ux%20components/lists%20and%20grids/Simple_Grid_and_Video.zip 

grid with details and video

https://github.com/rokudev/samples/blob/master/ux%20components/lists%20and%20grids/Simple_Grid_with_Details_and_Video.zip


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
