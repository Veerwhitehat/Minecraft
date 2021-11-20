

var canvas= new fabric.Canvas("myCanvas");

var block_image_width= 30;
var block_image_height= 30;

player_x=10;
player_y=10;

var player_object="";
var block_object="";

function playerupload(){
    fabric.Image.fromURL("player.png",function(Img){
      player_object=Img;
      player_object.scaleToWidth(150); 
      player_object.scaleToHeight(140);
      
      player_object.set({
          top:player_y,
          left:player_x,

      });
      canvas.add(player_object);
    });
}
function objectupload(block_image){
    fabric.Image.fromURL(block_image,function(Img){
      block_object=Img;
      block_object.scaleToWidth(block_image_width); 
      block_object.scaleToHeight(block_image_height);
      
      block_object.set({
          top:player_y,
          left:player_x,

      });
      canvas.add(block_object);
    });
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
  var keycode=e.keyCode;
  if(e.shiftKey==true && keycode=='80'){
    block_image_height+=10;
    block_image_width+=10;
    document.getElementById("current-width").innerHTML=block_image_width;
    document.getElementById("current-height").innerHTML=block_image_height;

    

  }
  if(e.shiftKey==true && keycode=='77'){
    block_image_height-=10;
    block_image_width-=10;
    document.getElementById("current-width").innerHTML=block_image_width;
    document.getElementById("current-height").innerHTML=block_image_height;
    
    

  }
  if(keycode=='38'){
    up();
  }
  if(keycode=='40'){
    down();
  }
  if(keycode=='37'){
    left();
  }
  if(keycode=='39'){
    right();
  }
  if(keycode=='67'){
    objectupload("cloud.jpg");
  }
  if(keycode=='68'){
    objectupload("dark_green.png");
  }
  if(keycode=='71'){
    objectupload("ground.png");
  }
  if(keycode=='76'){
    objectupload("light_green.png");
  }
  if(keycode=='82'){
    objectupload("roof.jpg");
  }
  if(keycode=='84'){
    objectupload("trunk.jpg");
  }
  if(keycode=='85'){
    objectupload("unique.png");
  }
  if(keycode=='87'){
    objectupload("wall.jpg");
  }
  if(keycode=='89'){
    objectupload("yellow_wall.png");
  }
  
}
function up(){
 if(player_y>=0){
   player_y=player_y-block_image_height;
   canvas.remove(player_object);
   playerupload();
 } 
}
function down(){
  if(player_y<=360){
    player_y=player_y+block_image_height;
    canvas.remove(player_object);
    playerupload();
  } 
 }
 function left(){
  if(player_x>=0){
    player_x=player_x-block_image_width;
    canvas.remove(player_object);
    playerupload();
  } 
 }
 function right(){
  if(player_x<=650){
    player_x=player_x+block_image_width;
    canvas.remove(player_object);
    playerupload();
  } 
 }
 
 

 


