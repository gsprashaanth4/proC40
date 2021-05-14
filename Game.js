class Game
{
    constructor()
    {

    }

    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state)
    {
        database.ref('/').update({
            gameState : state
        });
    }

    async start()
    {
        if(gameState === 0)
        {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        player1 = createSprite(200,400);
        player1.addImage(playerImg);
        player1.scale = 0.2;

        player2 = createSprite(800,400);
        player2.addImage(playerImg);
        player2.scale = 0.2;


        players = [player1, player2];
    }

    play()
    {
        background("yellow");
        form.hide();
        Player.getPlayerInfo();
        //image();

        var x = 100;
        var y = 200;
        var index = 0;

        drawSprites();

        for(var plr in allPlayers)
        {
            index = index+1;
            x = displayWidth/2.5 - allPlayers[plr].distance;
            y = 400;

            players[index - 1].x = x;
            players[index - 1].y = y;

            if(index === player.index)
            {
                fill("black");
                textSize(18);
                text(allPlayers[plr].name, (players[index - 1].x)-20, (players[index - 1].y)-50);
            }

            //textSize(16);
            //fill("blue");
            //text("score-player1: " + allPlayers.player1.score, 50, 50);
            //text("score-player2: " + allPlayers.player2.score, 50, 100);
        }

        if(keyDown(LEFT_ARROW) && player.index !== null)
        {
            player.distance += 10;
            player.update();
        }

        if(keyDown(RIGHT_ARROW) && player.index !== null)
        {
            player.distance -= 10;
            player.update();
        }
  
        if (frameCount % 20 === 0) 
        {
            germs = createSprite(random(100, 1000), 0, 100, 100);
            germs.scale = 0.2;
            germs.velocityY = 6;   

            var rand = Math.round(random(1,3));

            switch(rand)
            {
                case 1: germs.addImage("germ44", germ1);
                break;

                case 2: germs.addImage("germ44", germ2);
                break;

                case 3: germs.addImage("germ44", germ3);
                break;

            }
            germGroup.add(germs);
        }

        if (player.index !== null) 
        {
          for (var i = 0; i < germGroup.length; i++) 
          {
            if (germGroup.get(i).isTouching(players)) 
            {
              //player.score = player.score + 1;  
              germGroup.get(i).destroy();  
              player.update();
            }
          }
        }
    
        textSize(15);
        text("use the arrow keys to move you're vaccine",360,490);

    }
    
    end()
    {
      text("gameOver", 200, 200);
      console.log("gameOver");  
    }
}





























































































































/*
class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form();
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index)
                     {
                         
                       //add code to display the player's name on the respective basket.

                         
                     }
                    
                      
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     germs = createSprite(random(100, 1000), 0, 100, 100);
                     germs.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: germs.addImage("germ1",germ1_img);
                         break;
                         case 2: germs.addImage("germ1", germ2_img);
                         break;
                         case 3: germs.addImage("germ1", germ3_img);
                         break;
                         case 4: germs.addImage("germ1", germ4_img);
                         break;
                         case 5: germs.addImage("germ1", germ5_img);
                         break;
                     }
                     germGroup.add(germs);
                     
                 }
                 
                  if (player.index !== null) 
                  {
                    for (var i = 0; i < germGroup.length; i++) 
                    {
                        if (germGroup.get(i).isTouching(players)) 
                        {
                            germGroup.get(i).destroy();    
                        }
                    }
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}
*/
