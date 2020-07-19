# Welcome to Etch-A-Sketch.
### Purpose: This proyect was built as an assignment from The Odin Proyect course, it helped me grasp 
### the concepts of DOM manipulation using Javascript.
# [View Proyect Live](https://ajprogramdev.github.io/HoverColorGrid/)
# Description: 
Program creates a grid of squares inside a (500px X 500px) container.The container is filled 
with boxes using grid display. Onmouse hover on the container, triggers a 
hovering effect changing the color of the squares. The user can [Clear] the grid, 
[Resize] the grid and [RandomColor] which removes the default
color and displays random colors.

# Concepts:
 - DOM manipulation
 - event listeners
 - element creation 
 - class manipulation


# Functions:
   ### createGrid(size): Argument used to determine the size of the grid and creates it.
      - The display of the children is 'Grid'.
      - The grid id is #grid-build.
      - calls:createChildBoxes(size);
      - getWhiteColor();

 ### createChildBoxes(size): 
                    - Argument used to determine the amount of divs to be created.
                    - Each div gets a class named .div-hover.
                    - Each div is appended to the #grid-build.
                    
### clearGrid(): 
                      - Takes no arguments,removes #grid-build's children till empty.

### generateRandomColors():
           - Takes no arguments, sets random color on 'mouseover' on all .div-hover items.
           
### getWhiteColor(): 
     - Takes no arguments, sets primary color on, 'mouseover' on all .div-hover items.


# Assets:

- Cursor: custom image of a brush.
- Background Image: galaxy style image.

# Resources:
- MDN documentation
- https://css-tricks.com/snippets/javascript/random-hex-color/ RandomColor formula.
- GIMP





