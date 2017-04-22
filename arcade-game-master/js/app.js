// Enemies our player must avoid
var Enemy = function(position) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.id = 0;
    this.position = position; //grid position such as {x:0, y:0}
    this.velocity = {x:30, y:0};

    this.x = (this.position.x)* 101;
    this.y = (this.position.y - 0.5)*83 + 15;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
      this.x += this.velocity.x*dt;
      if(this.x > 505){
          this.x = -101;
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(position){
    this.position = position; //grid position such as {x:0, y:0}
    this.x = (this.position.x)* 101;
    this.y = (this.position.y - 0.5)*83 + 15;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
    this.x = (this.position.x)* 101;
    this.y = (this.position.y - 0.5)*83 + 15;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    console.log(key);
    switch(key){
        case "left":
            this.position.x -= 1; //left
            break;
        case "up":
            this.position.y -= 1; //up
            break;
        case "right":
            this.position.x += 1;//'right'
            break;
        case "down":
            this.position.y += 1; //down
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

function CreateEnemies(count){
    var enemies = [];
    for(var i = 0; i < count; i++){
        var position = {x:-1, y:i % 3 + 1};
        var enemy = new Enemy(position);
        enemy.id = i;
        var seed = Math.random();
        var speed = (seed < 0.2)? 10 : seed* 50;
        enemy.velocity = {x: speed, y:0};
        enemies.push(enemy);
    }
    return enemies;
}
var allEnemies = CreateEnemies(3);

var player = new Player({x:2, y:5});
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
