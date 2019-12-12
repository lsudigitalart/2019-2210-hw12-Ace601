let song;
let img;
let img1;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let r,g,b,a;
let r1,g1,b1,a1;
let speed;
let note1;
let direction;

   function preload(){
   song = loadSound('Clint Mansell - Lux Aeterna (Requiem for a Dream).mp3');
    img = loadImage('New Composition_1.png');
    img1 = loadImage('New Composition_2.png');
}




function setup(){
createCanvas(600,600);

img.resize(110, 110);
 img1.resize(100,100) 
note1 = new Note (25, 50, speed);


}

function mousePressed() {
    song.play();
}



function draw(){
    background(25);
  
  textSize(32);
fill(0, 102, 153);
  text('Click Here', 10, 30);
  //Note(); 
  
note1.move();
  note1.show();
  
  
  

}

 
    
    class Note{
    
      constructor(x1, y1, speed){
    
      
      this.move = function() {
   this.newMethod();
  this.x1 < this.x1 + 500;
  this.speed = 0.5;
      
      x1 = x1 + 3;
     
   
 }
   this.newMethod = function() {
        this.x1 < this.x1 + this.speed;
    }

    this.show = function(){
    
    
      r1 = random(0,200); 
  g1 = random(20,100); 
  b1 = random(77);
  a1 = random(0,100);

  for(let x1 = -90; x1 <= 500; x1=x1 +150 ){
            for(let y1 = 0; y1 <= height+150; y1 = y1+80){
     tint(r1,g1,b1,a1);
              
        this.speed = random(100)      
              
     image(img, x1, y1); 
    
    }
              
r = random(255); 
g = random(100,200); 
b = random(100);
a = random(70);
  
      for(let x2 = 3; x2 <= 550; x2 =x2+142 ){
          for(let y2 = 5; y2 <= height*2+80; y2 = y2+80){
             tint(r, g, b, a);
             image(img1, x2, y2);




    }}

    
    
  }
        }}}
