function setup() {
  createCanvas(windowWidth, windowHeight)
  


}

function draw() {
  background (0)

  print(mouseX,mouseY)
  



  //red candle
  fill (255,0,0)
  rect(180, 160, 150, 300)
  rect(400, 490, 150, 200)
  rect(940, 365, 150, 250)

  //green candle 
  fill (0,255,0)
  rect(580, 410, 150, 100)
  rect(790, 110, 150, 250)
  
 


  //red candle stick 1 iso
  stroke(255)
  for(var i = 0; i < 160; i+=10){
    line (180+i, 460, 230+i, 490)
  }
  for (var i = 0; i < 310; i+=10){
  line (330, 460-i, 380, 490-i)
  }
  for(var i = 0; i < 160; i+=10){
  line (400+i, 690, 430+i, 710)
  }
  for (var i = 0; i < 210; i+=10){
  line (550, 690-i, 580, 710-i)
  }
  for (var i = 0; i < 160; i+=10){
  line (580+i, 410, 620+i, 380)
  }
  for (var i = 0; i < 110; i+=10){
  line(730, 410+i, 770, 380+i)
  }
  for (var i = 0; i < 160; i+=10){
  line(790+i, 110, 840+i, 70)
  }
  for (var i = 0; i < 260; i+=10){
  line(940, 110+i, 990, 70+i)
  }
  for (var i = 0; i < 160; i+=10){
  line(940+i, 615, 970+i, 640)
  }
  for (var i = 0; i < 260; i+=10){
  line(1090, 615-i, 1120, 640-i)
  }
  
  //quad arrows
  fill (255,20,147)
  quad (380, 190, 402, 512, 230, 490, 380, 490)
  quad (430, 710, 580, 710, 580, 510, 590, 730)
  quad (620, 380, 790, 360, 770, 480, 770, 380)
  quad (840, 70, 990, 70, 990, 320, 1025, 40)
  quad (970, 640, 1120, 640, 1120, 390, 1140, 670)
  

  


}

function windowResized() {
  resizeCanvas (windowWidth, windowHeight)


}

