class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
   
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,300)
    car4=createSprite(700,300)
    
    cars=[car1,car2,car3,car4]
    car1.addImage(car1i)
    car2.addImage(car2i)
    car3.addImage(car3i)
    car4.addImage(car4i)
    
  }

  play(){
  
    form.hide();
      
      player.getCarRank();
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(track2)
    
    
      image(tracki, 0,-displayHeight*5,displayWidth,displayHeight*6)
     
   
     
     var x=170
     var y;
     var index=0;
     for(var plr in allPlayers){
       index=index+1
       x=x+200
       y=displayHeight-allPlayers[plr].distance
       cars[index-1].x=x
       cars[index-1].y=y
       if(index=== player.index){
         fill("red")
         ellipse(x,y,150,150)
        cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
      
    camera.position.y=cars[index-1].y
      }
     }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null && finish!==true){
      player.distance +=40
      player.update();
    }
    if(player.distance>5290 && finish!==false){
     player.rank=finishedplayer
     player.update()
     finish=true
      Player. updateCarRank(player.rank)
    }
   
    drawSprites()
  }


  displayRank(){

    imageMode(CENTER)
   Player. getPlayerInfo()
   image(silver,displayWidth/-4,displayHeight/9+(-100),250,250)
   image(bronze,displayWidth/4,displayHeight/9+(-100),200,200)
     image(gold,0,displayHeight/2-100,300,300)
     for(var plr in allPlayers){
        fill("black") 
     stroke(5) 
     if(allPlayers[plr].rank === 1){ 
       text("1st : "+allPlayers[plr].name,0,85); } 
       else if(allPlayers[plr].rank === 2){
          text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73); }
          else if(allPlayers[plr].rank === 3){
             text("3rd: " + allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76); }
          else{ textSize(30); text("Honorable Mention: " + allPlayers[plr].name, 0,-270); } }
  
}
  
  
  
  }
