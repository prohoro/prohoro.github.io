var buttonStart, song, an;
function setup() {
  createCanvas(window.innerWidth , 480);
  buttonStart = createButton('clean');
  buttonStart.mousePressed(start);  
}
function draw() {
  
    ellipse(mouseX, mouseY, 80, 80);
    //for (int i = 0; i<9999; i++);
    
}
function start(){
  console.log();
  rect( 0, 0, width, height );
}