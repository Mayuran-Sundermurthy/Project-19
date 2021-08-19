var player, score = 0;
var invisible1, invisible2;
var obstacle, obstacleGroup;
var gameState = 1;

function preload(){

}

function setup() {
    createCanvas(1920,500);
    player = createSprite(50,height/2,35,35);
    player.shapeColor = 'green';
    invisible1 = createSprite(width/2,0,width,10);
    invisible1.visible = false;
    invisible2 = createSprite(width/2,500,width,10);
    invisible2.visible = false;
    obstacleGroup = new Group();
}

function draw() {
    background(5);
    
        if(gameState == 1){
            score += Math.round(getFrameRate()/60);
    
        if(keyDown(UP_ARROW)){
            player.y -= 10;
        }
    
        if(keyDown(DOWN_ARROW)){
            player.y += 10;
        }

        if(player.isTouching(obstacleGroup)){
            gameState = 0;
        }
        createWalls();
        }
        
        
        if(gameState == 0){
            text("GAME OVER", width/2, height/2);
            obstacleGroup.setVelocityXEach(0);
            obstacleGroup.lifetime = -1;
        }

        player.collide(invisible1);
        player.collide(invisible2);
        createEdgeSprites();
        
        
    
    
        
    
    
    drawSprites();
    text("Score: "+ score, 50, 20);
}

function createWalls(){
    if(frameCount % 30 == 0){
        obstacle = createSprite(2000,Math.round(random(35,465)), 10, Math.round(random(10,120)));
        obstacle.velocityX = -(6+score/100);
        obstacle.lifetime = 333;
        obstacle.shapeColor = 'red';
        obstacleGroup.add(obstacle);
    }
}