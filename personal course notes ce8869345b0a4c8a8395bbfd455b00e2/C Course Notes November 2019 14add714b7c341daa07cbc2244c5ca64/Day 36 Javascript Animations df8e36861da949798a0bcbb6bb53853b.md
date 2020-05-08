# Day 36 - Javascript Animations

## Javascript

We can use also Javascript to create CSS effects

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Javascript Manipulation</title>
    <style>
        div.container{
            background-color:#eee;
            padding:2vmin 5vmin;
        }
        div#long{
            width:20vmin;
        }
        div.box{
            display:inline-block;
            width:10vmin;
            height:10vmin;
            background-color: #ccc;
            margin:1.5vmin;
            padding:2vmin;
        }
        div.slightly-curved{
            border-radius: 2vmin;
        }
        div.curved{
            border-radius:7.5vmin;
        }
        div.curved > .child{
            width:1vmin;
            height:1vmin;
            padding:0;
            background-color:red;
        }
        /* a) on hover, extend the width  b) on mouseout retract the width */
        div#extendable:hover{
            width:20vmin;
            background-color:#999;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box slightly-curved">Box 2</div>
        <div class="box curved">Box 3</div>
        <div class="box curved" id="long">Box 4</div>
        <div class="box curved">
            <div class="box curved child">
            </div>
        </div>
        <div class="box curved" id="extendable">Box 6</div>
        <div class="box curved" id="javascript-extendable">Box 7</div>
    </div>
    <script>
        // set event listener
        document.getElementById('javascript-extendable')
            .addEventListener('mouseover',function(){
              // set width directly
              document.getElementById('javascript-extendable').style.width='20vmin';
        })
        document.getElementById('javascript-extendable')
            .addEventListener('mouseout',function(){
              // set width directly
              document.getElementById('javascript-extendable')
                 .setAttribute('style','width:10vmin;')
        })
    </script>
</body>
</html>
```