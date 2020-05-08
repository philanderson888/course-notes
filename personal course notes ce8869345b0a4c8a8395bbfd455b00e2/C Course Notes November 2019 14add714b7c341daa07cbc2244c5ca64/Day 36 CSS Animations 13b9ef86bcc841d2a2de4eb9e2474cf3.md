# Day 36 - CSS Animations

# CSS Animations and also Javascript effects

Let's play around with CSS a little bit today.

CSS has something called Position which affects how a div is visible on the scree

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Div Labs</title>
    <link href='<http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext>' rel='stylesheet' type='text/css'>
    <style>
        body{
            background-color: rgb(226, 222, 222);
            font-family: 'Lato';
        }
        div.container{
            margin:2vh 5vw;  /* 2% height 5% width  */
            background-color: #ccc;
            padding:1.5vh 2vw;
        }
        div.box{
            width:10vw;
            height:10vh;  /* scalable box 10% of screen */
            background-color: #999;
            margin:1vmin;  /* 1% of the minimum of height/width */
            padding:1vmin;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
        <div class="box">Box 6</div>
        <!-- Add border, shadow???, then on HOVER change border/color-->
    </div>
</body>
</html>
```