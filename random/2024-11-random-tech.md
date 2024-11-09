# 2024-11 random tech

## contents

- [2024-11 random tech](#2024-11-random-tech)
  - [contents](#contents)
  - [202411 scripted notes](#202411-scripted-notes)
  - [202411 ai robots](#202411-ai-robots)
  - [202411 artificial intelligence](#202411-artificial-intelligence)
  - [202411 artificial intelligence in videos](#202411-artificial-intelligence-in-videos)
  - [202411 maths](#202411-maths)
  - [202411 tech to investigate](#202411-tech-to-investigate)
  - [202411 video final cut pro](#202411-video-final-cut-pro)
  - [202411 cloud](#202411-cloud)

## 202411 scripted notes

a) record voice

b) upload to video

c) upload video to youtube so can listen to it

## 202411 ai robots

Clone AI humanoid robot

nvidia isaac sim is a way of training ai robots

developer nvidia.com has latest work by nvidia

nvida have an omniverse for training robots

## 202411 artificial intelligence

waymo has autonomous cars right now

## 202411 artificial intelligence in videos

clip anything from opus clip turns long form videos into short-form social media readily digestible clips.

## 202411 maths

circle area is pi r squared

Cosine Rule: a squared = b squared + c squared - 2bc cosine A

Sine Rule: sin A over A = Sin B over B

Volume of sphere is 4/3 PI R cubed

Volume of cone is 1/3 PI R squared x height

## 202411 tech to investigate

google earth timeline can now show us how a landscape has changed over the years


## 202411 video final cut pro 

option w adds a 3 second gap 


## 202411 cloud

apache spark is used to crunch huge amounts of cloud data using distributed parallel processing ... install using `pip install pyspark` and use the command `pyspark` or run with docker image `docker run -it --rm spark:python3 /opt/spark/bin/pyspark` and can run code with for example 

```py 
df = spark.read.json("logs.json")
df.where("age > 21").select("name.first").show()
```
