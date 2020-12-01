# Building A Channel

## Contents

- [Building A Channel](#building-a-channel)
  - [Contents](#contents)
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
