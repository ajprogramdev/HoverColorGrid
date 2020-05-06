window.onload = function() {
    let size = 24;
    createGrid(size);
 
    /*Event Listeners */
     document.getElementById('btn-resize').addEventListener('click',() =>{
       let checkSize = null; 
         do{
          checkSize =  prompt("Enter a number between 2 and 64. Example: (5)input will generate a grid with 5 rows and 5 columns (5x5)");
          if(checkSize <= 1 || checkSize > 64){
                 this.alert("The number you entered is not between 2 and 64");
                 
          }else{
              size = checkSize;
          }
        }
        while(checkSize <= 1 || checkSize > 64); 
        createGrid(size);
      
      });

      document.getElementById('btn-clear').addEventListener('click',() =>{
      
         clearGrid();
         createGrid(size);
      
      });

      document.getElementById('btn-random').addEventListener('click',() =>{
      
        generateRandomColors();

     });
        
 }


function createGrid(size){
    clearGrid();
    document.getElementById('grid-size').innerHTML = `(${size}x${size})`;
    const mainGrid = document.getElementById('grid-build'); 
            /*DivContainer*/  
            mainGrid.style.display = 'grid';
            mainGrid.style.gridTemplateColumns = `repeat(${size},auto)`;
            mainGrid.style.gridTemplateRows = `repeat(${size},auto)`;
            mainGrid.style.width = '100%';
            mainGrid.style.height = '100%';
    createChildBoxes(size);
    getWhiteColor();
}


function createChildBoxes(size){
    const mainGrid = document.getElementById('grid-build');
    for(let i = 0; i < size * size; i++){
       const div = document.createElement('div');
           div.style.border = "";
           div.style.backgroundColor = "white";
           div.style.opacity = '0.1';
           div.className ='div-hover';
       mainGrid.appendChild(div);
       }
   
}


function clearGrid(){
    const mainGrid = document.getElementById('grid-build');
     while(mainGrid.firstChild){
         mainGrid.removeChild(mainGrid.lastChild);
     }
 }
 

/* Random Color Formula From : https://css-tricks.com/snippets/javascript/random-hex-color/ */
function generateRandomColors(){
    const div = document.querySelectorAll('.div-hover');
    console.log(div);
    div.forEach(function (el){
        el.addEventListener('mouseover', e => {e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                                              e.target.style.opacity = '1';});
    });
}


function getWhiteColor(){
    const div = document.querySelectorAll('.div-hover');
    console.log(div);
    div.forEach(function (el){
        el.addEventListener('mouseover', e => {e.target.style.backgroundColor = "white";
                                              e.target.style.opacity = '0.6';});
    });

}



