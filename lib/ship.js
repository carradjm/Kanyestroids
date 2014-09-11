(function () {
  // If window.Zoo does not exist yet, set it to a new blank object.
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (game){
    Asteroids.MovingObject.call(this, {pos: [300, 300],
                       color: Ship.COLOR,
                       radius: Ship.RADIUS,
                       vel: [0, 0],
                       game: game})
  };

  Ship.RADIUS = 10;
  Ship.COLOR = Asteroids.Util.randomColor();

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = [300,300];
    this.vel = [0,0];
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];

    if (this.vel[0] > 6) {
      this.vel[0] = 6;
    }

    if (this.vel[1] > 6) {
      this.vel[1] = 6;
    }

  };

  Ship.prototype.fireBullet = function() {
    if (this.vel[0] === 0 && this.vel[1] === 0) {
      return;
    } else {
      var bullet = new Asteroids.Bullet(this.game, this);
      this.game.bullets.push(bullet);
    }
  };

})();
