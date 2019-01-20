### CSS DRAW
This is a visual tool to draw on the beowser and export HTML/CSS code

In this version there is the structure of the layer of drawing, 
with the possbility to move the using the tool box or by dragging them

##### the next steps are:
Create and delete layers
Create a full manipulatyion of position rotaton scale and zIndex

#### STRUCTURE
The app is based on an object, that contains the info of a layer
(width, height, color, zindex, ecc) and another field wich is an array of children
to access this object and all is children I use a recursive algorithm that processes 
the info of the current layer, then maps the children info, creates a new object same as 
itself and passes the child info, and the process goes on until it reaches a empty children field

This object has some methods to change its data, and to solve the propblem if sync data, I call a setState
to let everybody know that the data has changed

Che app can be split in three main parts
###### Draw
the part that deaws every node, and handles the events of the drawing itself
###### ToolBox
this part allows to create new layers and modify the info of each layer with a pixel precision
###### Export
this part allows to export the drawing in HTML components with tags that refer to a CSS file