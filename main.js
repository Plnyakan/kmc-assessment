const Orbit = require('./orbit');
const Vehicle = require('./vehicle');

class KingShanTrip {
  constructor() {
    this.orbits = [
      new Orbit("Orbit 1", 18, 20),
      new Orbit("Orbit 2", 20, 10),
    ];

    this.vehicles = [
      new Vehicle("Bike", 10, 2),
      new Vehicle("Tuktuk", 12, 1),
      new Vehicle("Car", 20, 2),
    ];
  }

  recommendVehicleAndOrbit(weather, trafficSpeedOrbit1, trafficSpeedOrbit2) {
    this.orbits.forEach((orbit) => orbit.adjustCraters(weather));

    let fastestTime = Number.MAX_SAFE_INTEGER;
    let recommendedOption = "";

    this.vehicles.forEach((vehicle) => {
      this.orbits.forEach((orbit) => {
        const currentCraters = orbit.craters;

        console.log("creaters",currentCraters)
        const currentTrafficSpeed =
          orbit.name === "Orbit 1" ? trafficSpeedOrbit1 : trafficSpeedOrbit2;

        if (vehicle.speed <= currentTrafficSpeed) {
          const time = (orbit.megaMiles / vehicle.speed) + (currentCraters * vehicle.timePerCrater);
          if (time < fastestTime || (time === fastestTime && orbit.name === "Orbit 2")) {
            fastestTime = time;
            recommendedOption = `${vehicle.name} on ${orbit.name}`;
          }
        }
      });
    });

    return recommendedOption;
  }
}



module.exports = KingShanTrip;
