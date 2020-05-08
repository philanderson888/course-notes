# Day 36 - Javascript Adding Elements To The DOM

## Creating Elements

We can create elements 

When we do this we add them into the page, but where and how?

Hierarchy of HTML is called DOM

```
window (root element)

	document (page)

		HTML 

			HEAD

			BODY

				DIV

					add element here
```

We can

1) Create element

2) Append element into the DOM using the correct Parent element

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
            margin:2vh 0;
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
        div#animated{
            transition:width 1s, background-color 7s;
        }
        div#animated:hover{
            width:20vmin;
            background-color:#777;
        }
        div.button{
            width:20vmin;
            height:7vmin;
            border-radius:3vmin;
            text-align:center;
            font-weight: bold;
            font-family: Arial;
            padding:3vmin 0 0 0 ;
            background-color:bisque;
            border: 2px solid brown;
            box-shadow: brown 10px 5px 10px;
        }
        div.button:hover{
            padding:3vmin 1vmin 0 1vmin;
            background-color:#f8c586;
            cursor: pointer;
        }
        div.button:active{
            background-color:#f5ae58;
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
        <div class="box curved" id="animated">Box 8</div>
    </div>

    <div class="container" id="add-new-elements-here">
        <div class="box button" id="create-more-elements">Create More Elements</div>
        <div class="box button" id="remove-elements">Remove Elements</div>
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
        
        document.getElementById('create-more-elements')
            .addEventListener('click',createElements);

        document.getElementById('remove-elements')
            .addEventListener('click',removeElements);

        function createElements(){
            // add items to DOM
            var newDiv = document.createElement('div');
            var newText = document.createTextNode('here is some data');
            newDiv.append(newText);
            document.getElementById('add-new-elements-here').append(newDiv);
        }
        function removeElements(){
            // remove last item from container (div)
            // get list of items
            var listOfItemsToRemove = 
                document.getElementById('add-new-elements-here');
            var listLength = listOfItemsToRemove.length;
            // remove last item
            // ... class will find this solution ....

        }
    </script>
</body>
</html>
```