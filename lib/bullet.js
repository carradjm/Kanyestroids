(function () {
  // If window.Zoo does not exist yet, set it to a new blank object.
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (game, ship){
    if (ship.vel[0] === 0 && ship.vel[1] === 0) {
      var velocity = [3,0];
    } else {
      var velocity = [Math.signum(ship.vel[0]) * 3, Math.signum(ship.vel[1]) * 3];
    }

    Asteroids.MovingObject.call(this, {pos: ship.pos.slice(0),
                       color: Bullet.COLOR,
                       radius: Bullet.RADIUS,
                       vel: velocity,
                       game: game})
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = Asteroids.Util.randomColor();

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

})();
