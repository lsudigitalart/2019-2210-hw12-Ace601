let song;
let img;
let img1;
 let x1 = 0
   let y1 = 0
let x2 = 0
let y2 = 0



   function preload(){
    song = loadSound('Clint Mansell - Lux Aeterna (Requiem for a Dream).mp3')
    img = loadImage('New Composition_1.png');
    img1 = loadImage('New Composition_2.png')
}




function setup(){
createCanvas(1800,1800)



}

function mousePressed() {
    song.play();
}

function draw(){
    background(25);
    // image(img, width/2, y1);
    // image(img1, width/20, y2);
    // y1++;
  //tint(0, 153, 204);
   
  for(let x1 = -90; x1 <= 300; x1 =x1+150 ){
            for(let y1 = 0; y1 <= height*2; y1 = y1+300){
           
           image(img, x1, y1); 
            }
        }
          //y1++; 
         //y2-=2;
       
        

    
        for(let x2 = 5; x2 <= 600; x2 =x2+50 ){
            for(let y2 = 50; y2 <= height*2; y2 = y2+100){
                
               image(img1, x2, y2);



    }}

}






