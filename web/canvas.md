# CANVAS

```js		
		
	USEFUL TO DRAW GRAPHICS WITH JAVASCRIPT
	
	
	<CANVAS ID="">
	
	CANVAS{
		BORDER:
		
	}
	
	
	JS
	
	VAR CANVAS = DOCUMENT.GETELEMENTBYID('MYCANVAS')
	
	VAR CONTEXT = CANVAS.GETCONTEXT('2D');
	
	
	
	
	RECTANGLE
	
		CTX.FILLSTYLE="RED"
		CTX.FILLRECT(X,Y,WIDTH,HEIGHT)
		
	
	DELETE EXISTING
	
		CTX.CLEARRECT(X,Y,WIDTH,HEIGHT)
		
	
	STROKESTYLE  OUTLINE
	FILLSTYLE    INTERIOR
	
	PATH : CREATE CUSTOM SHAPE
	
		BEGINPATH()
		MOVETO(X,Y)
		LINETO(A,B)
		LINETO(C,D)		
		CLOSEPATH()
		
		STROKE		DRAW OUTLINE
		FILL		FILL SHAPE
		
		
	LINEAR GRADIENT
	RADIAL GRADIENT
	PATTERN				SEE CSS CHAPTER ON THESE
	
	
	
	
	CANVAS TRANSFORM
	
		ROTATE(30DEG)
		
		TRANSLATE(X,Y)
		
		SCALE(X,Y)
		
		
		
		
		
	
	
	
Canvas
	http://www.html5canvastutorials.com/	
	
	
	LINE
	
		DRAW LINE FROM (X,Y) TO (END-X,END-Y)
		
		line(x,y,end-x,end-y
		
	RECT
	
		DRAW RECTANGLE FROM (X,Y) WITH LENGTH AND WIDTH
		
		rect(x,y, length, width)
		
	TRIANGLE
	
		GIVEN THREE POINTS DRAW A TRIANGLE
		
		triangle (x,y,x1,y1,x2,y2)
		
	ELLIPSE
	
		DRAW AN ELLIPSE CENTRE (X,Y) WITH X-RADIUS AND Y-RADIUS
			
			
	background(r,g,b);
	stroke(r,g,b);
	strokeweight(12);
	noStroke();
	fill(r,g,b);
	noFill();
	point(x,y)
	arc (x,y,w,h,start,stop)
	bezier(x1,y1,cx1,cy1,cx2,cy2,x2,y2)
	quad(x1,y1,x2,y2,x3,y3,x4,y4);
	image(image,x,y,width,height)
		
		
		
	FILL
	
		FILLS INSIDE THE SHAPE OF THE CHARACTERS WITH FILLSTYLE
		fillStyle   ctx.fillStyle='red' 
		font        ctx.font='90px Verdana'
		fillText    ctx.fillText("text,startx,starty,maxWidth")   FILLS INSIDE TEXT, NO BORDER
	STROKE
	
		STROKES OUTSIDE THE LETTER TO CREATE THE BORDER OUTLINE WITH STROKESTYLE (COLOR) AND LINEWIDTH
		strokeStyle ctx.strokeStyle="green"
		lineWidth   ctx.lineWidth=3;
		font        ctx.font='90px Verdana'
		strokeText  ctx.strokeText('hello',0,0)    STROKES OUTSIDE TEXT, CREATES BORDER
					STROKE AND FILL EXAMPLE
					
					ctx.fillStyle='red';
					ctx.strokeStyle='green'
					ctx.lineWidth=3;
					ctx.font='90px verdana';
					ctx.fillText('Q',50,150);
					ctx.strokeText('Q',125,150);
					ctx.fillText('Q',200,150);
					ctx.strokeText('Q',200,150);
						PRODUCES http://i.stack.imgur.com/Ypwnz.png
	Canvas addColorStop()             Specifies the colors and stop positions in a gradient object
	Canvas arc()             Creates an arc/curve (used to create circles, or parts of circles)
	Canvas arcTo()             Creates an arc/curve between two tangents
	Canvas beginPath()             Begins a path, or resets the current path
	canvas can draw 2D graphics on the fly using javascript
	Canvas clearRect()             Clears the specified pixels within a given rectangle
	canvas clip is like cut
	Canvas clip()             Clips a region of any shape and size from the original canvas
	Canvas closePath()             Creates a path from the current point back to the starting point
	canvas color picker
	canvas container only
	Canvas context.drawImage(imageElement,x,y,width,height,dx,dy,dw,dh)
	canvas context.fillRect (x1,y1,x2,y2)  gives the canvas fill coordinates
	canvas context.fillStyle = “colour” determines the fill colour
	canvas context.stroke() causes the shape to appear on the canvas
	Canvas createEvent()             
	Canvas createImageData()             Creates a new, blank ImageData object
	Canvas createLinearGradient()             Creates a linear gradient (to use on canvas content)
	Canvas createPattern()             Repeats a specified element in the specified direction
	Canvas createRadialGradient()             Creates a radial/circular gradient (to use on canvas content)
	canvas document.getElementByID(“...”).getContext(“2d”)
	Canvas drawImage()             Draws an image, canvas, or video onto the canvas
	Canvas drawn by Javascript
	Canvas Dynamically Resize
	Canvas Expand Image on Hover
	Canvas fill()             Fills the current drawing (path)
	Canvas fillRect()             Draws a "filled" rectangle
	Canvas fillStyle             Sets or returns the color, gradient, or pattern used to fill the drawing
	Canvas fillText()             Draws "filled" text on the canvas
	Canvas font             Sets or returns the current font properties for text content
	canvas for large number of objects as SVG has to draw each one
	canvas for real time data
	canvas for small drawings
	canvas for small screens/mobile devices
	Canvas frequent redraw OK
	canvas games frequent redraw
	Canvas getContext()             
	canvas getContext(“2d”) returns an object that allows for drawing on the canvas
	Canvas globalAlpha             Sets or returns the current alpha or transparency value of the drawing
	Canvas globalCompositeOperation             Sets or returns how a new image are drawn onto an existing image
	canvas globalcompositeoperation defines how multiple elements combine on one canvas.  Source-over or destination-over refer to the layering
	Canvas has no event handler support
	canvas has no event listener
	canvas has poor text handling capabilities
	Canvas height             Returns the height of an ImageData object
	canvas ID width height
	canvas id=”name” width=”400” height = “300”
	canvas image map allows links from individual points on a picture
	canvas image map links to points on image
	canvas is an element to draw or render images
	canvas is an empty shell; to draw pixels use JS
	canvas is best for graphic intensive games where the image may be re-drawn frequently
	canvas is like paint : pixel based
	canvas is only a container object
	canvas is rendered by pixel
	canvas is resolution dependent
	Canvas isPointInPath()             Returns true if the specified point is in the current path, otherwise false
	Canvas lineJoin             Sets or returns the type of corner created, when two lines meet
	Canvas lineTo()             Adds a new point and creates a line from that point to the last specified point in the canvas
	Canvas lineWidth             Sets or returns the current line width
	Canvas measureText()             Returns an object that contains the width of the specified text
	Canvas no events
	canvas Note the HTML canvas feature is only a container: to draw anything you need JavaScript!
	canvas produces JPG or PNG
	Canvas quadraticCurveTo()             Creates a quadratic Bézier curve
	Canvas rect()             Creates a rectangle
	canvas resize
	Canvas restore()             Returns previously saved path state and attributes
	Canvas rotate()             Rotates the current drawing
	Canvas save()             Saves the state of the current context
	Canvas scale()             Scales the current drawing bigger or smaller
	Canvas setTransform()             Resets the current transform to the identity matrix. Then runs transform()
	Canvas shadowBlur             Sets or returns the blur level for shadows
	Canvas shadowColor             Sets or returns the color to use for shadows
	Canvas stroke()             Actually draws the path you have defined
	canvas strokeRect draws the outline of a rectangle
	Canvas strokeStyle             Sets or returns the color, gradient, or pattern used for strokes
	Canvas strokeText()             Draws text on the canvas (no fill)
	Canvas textAlign             Sets or returns the current alignment for text content
	Canvas transform()             Replaces the current transformation matrix for the drawing
	Canvas translate()             Remaps the (0,0) position on the canvas
	Canvas width             Returns the width of an ImageData object
```