# Brightscript

## Contents

- [Brightscript](#brightscript)
  - [Contents](#contents)
  - [Intro](#intro)
  - [Terms](#terms)
  - [Why Use Media Stick?](#why-use-media-stick)
  - [Market](#market)
  - [Setup](#setup)
  - [Hello World](#hello-world)

## Intro

Backwards compatible

Roku

Compiles into bytecode which is run by an interpreter.  This compilation step happens every time a script is loaded and run.  There is no saved, compiled, stored binary file to deal with.  So this is similar to Javascript.

Brightscript statement syntax similar to Python, Basic, Ruby, Lua

Objects are associative arrays which have key/value pairs

Uses Interfaces

Uses Integers by default, floats are not default

Dynamic and Static types OK

Written in C!!!

## Terms

- OVP Online Video Player
- Content Feed is RSS/XML/JSON with all metadata required to play content
- RokuOS in sticks and TVs and sound bars!
- Roku Developer program
- Roku channel store
- Voice search
- banner ads
- content engagement program
- scenegraph - creates the display in XML 
- brightscript
- just specify resolution - don't worry about CSS etc
- usually TV remote control
- goal help user find content as quickly as possible
- sideloading - manually upload content for development
- publish - first sideload then create encrypted package for publishing

## Why Use Media Stick?

Additional channels not on regular TV

Portable eg on hotel trips

## Market

Amazon Firestick $50 
- Amazon FireTV
- Prime
- Alexa
Chromecast $50 WINNER
- Google TV
- Android TV
- Cast from phone
- Google assistant
- Dolby vision
Roku
- Roku Ultra !!!
  - Phone app control
  - Remote with headphone jack
  - Ethernet
  - Find
  - Better remote than fire TV
- Roku Streambar £128 excellent sound quality

AppleTV


- HDR High Dynamic Range 
  - contrast marker
  - Higher range is better.
  - Higher means also brighter
  - NITS measurement of brightness
  - Versions
    - HDR10 - this is standard
    - HRD10+ 
    - HLG used for proper TV broadcast
    - Dolby Vision
      - Adds metadata every frame so better quality of sound
- 4K = UHD Ultra High Definition = pixel count
  - A 4K UHD TV is normally HDR as well

## Setup

Buy a ROKU device

Put in developer mode with Home x3 Up x2 R L R L R

Create Roku Acccount and enrol in developer program

On TV enable developer mode and go to given URL and log in with RokuDev and password you created

Can now sideload zip files to run

## Hello World

Create `GridScreen` project with `components` `images` `source` and `manifest` file in the root

GridScreen
  components
    MainScene.xml
      <script type="text/brightscript" uri="...brs" />
      <children>
        <Overhang id="overhand" showOptions="false" showClock="false" logoUrl="..." 
          translation="[0,60]" />
        <Label id=".." text="..loading" width.. height..  translation="[0,0]" 
          horizAlign="center" vertAlign="center" visible="false" font="font:.." />
  source
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


source  

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