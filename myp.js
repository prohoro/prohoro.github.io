var buttonStart, song, an, buttonSelect;
var count = 0;
function setup() {
  createCanvas(window.innerWidth , 500);
  buttonStart = createButton('clean');
  buttonSelect = createButton('select');
  buttonSelect.mousePressed(Select);
  buttonStart.mousePressed(start);  
}
function draw() {
        if (mouseIsPressed){
          if (count == 0)
            rect( mouseX, mouseY, mouseX+80, mouseX-80 );
          if (count == 1)
            ellipse(mouseX, mouseY, 80, 80);
          if (count == 2)
            rect( mouseX, mouseY, mouseX-80, mouseX+80 );
        }
}
function start(){
  console.log();
  rect( 0, 0, width, height );
}
function Select (){
  if (count > 1)
    count = 0;
  else
    count++;
  console.log(count);
}