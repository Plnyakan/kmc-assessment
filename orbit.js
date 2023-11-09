class Orbit {
    constructor(name, megaMiles, craters) {
      this.name = name;
      this.megaMiles = megaMiles;
      this.craters = craters;
    }
  
    adjustCraters(weather) {
      if (weather === "Sunny") {
        this.craters -= this.craters * 0.1;
      } else if (weather === "Rainy") {
        this.craters += this.craters * 0.2;
      }else if (weather === "Windy"){
        this.craters
      }
    }
  }
  
  module.exports = Orbit;
  