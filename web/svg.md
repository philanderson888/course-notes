# SVG 

```js	
SVG (MODULE 11)
	
	SVG independent of resolution ie scales in and out with no loss of definition
		
		NATIVE HTML ELEMENTS BUILT WITH SCALAR GRAPHICS (LINES WHICH SCALE WELL WHEN 
						MADE BIGGER OR SMALLER)
		MANIPULATE SAME AS ANY OTHER HTML ELEMENT
	
		APPLY CSS TO SVG
		
		HANDLE EVENTS SAME AS ANY OTHER HTML ELEMENT
		
		PERFORMANCE : DEPENDS ON NUMBER OF ELEMENTS ON PAGE
		
				MORE COMPLEX : USE CANVAS
	
	CANVAS
	
	
		PROVIDES A PLACES WHERE JAVASCRIPT CAN BE USED TO DRAW ON A PAGE
		
		
SVG
		
	BUILT INTO DOM
	SHAPES
	
		PATH
		RECT
		ELLIPSE
		POLYGON
	TEXT
	
	
	CREATE SVG ELEMENT
	
		<svg xmlns="http://www.w3.org/2000/svg">
	
	
	
	CSS EXAMPLE
	
		SVG{
			BORDER:2PX SOLID BLUE
			BACKGROUND-COLOR:LIGHT-GREEN
			WIDTH:300PX
			HEIGHT:200PX						==> WILL DRAW BACKGROUND OF SVG ELEMENT
		}
	
	
	
	FILL INSIDE
	
	STROKE OUTSIDE
		STROKE-WIDTH
	
	RECT
		X
		Y
		WIDTH
		HEIGHT
	
	CIRCLE
	
		CX
		CY
		R
		
	ELLIPSE
	
		CX
		CY
		RX
		RY
	
	POLYLINE
		
		POINTS X1 Y1,X2 Y2,X3 Y3
		FILL='NONE'
		
	POLYGON
	
	
		POINTS
	
	PATH : COMPLEX SHAPES
	
	
	
	
	LINEAR GRADIENT
	RADIAL GRADIENT
	PATTERN
	
	
	
	TEXT : AS REGULAR TEXT
	
		STROKE-WIDTH IS THICKNESS OF LINE
		
		FILL INSIDE
		
		STROKE OUTSIDE
		
	
	TEXTPATH : CAN BE USED TO PUT TEXT ON A PATH EG AROUND THE PERIMITER OF AN OBJECT
	
	
	
	
	
	
	SVG RANDOM TERMS	
		
		
		SVG defines images in XML format which can be searched and changed etc
		SVG embedded using <embed src="http://www.w3schools.com/svg/circle1.svg" type="image/svg+xml" />
		SVG Events
		SVG for documents that scale well
		SVG for large screens as the image expands with no pixellation
		SVG good for static eg maps where re-rendering is not too frequent
		SVG iframe src="http://www.w3schools.com/svg/circle1.svg"></iframe>
		SVG images can be animated
		SVG is good for maps
		SVG is resolution independent
		SVG is XML , searchable, resizeable, can be animated
		SVG is XML good static images lousy fast moving images. scalable.
		SVG object data="http://www.w3schools.com/svg/circle1.svg" type="image/svg+xml"></object>
		SVG supports event handlers and listeners
		svg xmlns="http://www.w3.org/2000/svg" version="1.1">   <circle cx="100" cy="50" r="40" stroke="black"              stroke-width="2" fill="red"/>   </svg>
		
		
		
TRANSFORM (11-16)  (SEEN IN MODULE 6 ALSO)
	ROTATE(ANGLE,X,Y)   BY ANGLE 30DEG ABOUT POINT X,Y
	
	TRANSLATE(X,Y)		MOVE SHAPE BY X AND Y
	
	SCALE(X,Y)			MULTIPLE SIZE BY X AND Y
	
	SKEW()
	lab demo : MODULE 11 : sgvdocument.html
		hover over 
		
		
		
		
		
		
			
	
	
	
	```