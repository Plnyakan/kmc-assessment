const { expect } = require('chai');
const KingShanTrip = require('./main');

describe('KingShanTrip', () => {
  let tripdata;

  beforeEach(() => {
    tripdata = new KingShanTrip();
  });

  // i have realized that the expected output for second scenario for the  windy weather is incorrect
  // because all of the vehicles are allowed meaning  a car vehicle will not be the vehicle that reaches the
  // destination with the fasted time instead it will be the Tuktuk vehicle that reaches the destination with the fasted time.
  // it can only be a car if only the bike and car were the only vehicles allowed.

  it('should recommend a vehicle and orbit for Windy weather', () => {
    const recommendedOption = tripdata.recommendVehicleAndOrbit('Windy', 14, 20);
    expect(recommendedOption).to.equal('Tuktuk on Orbit 2');
  });

  it('should recommend a vehicle and orbit for Sunny weather', () => {
    const recommendedOption = tripdata.recommendVehicleAndOrbit('Sunny', 12, 10);
    expect(recommendedOption).to.equal('Tuktuk on Orbit 1');
  });

  it('should recommend a vehicle and orbit for Rainy weather', () => {
    const recommendedOption = tripdata.recommendVehicleAndOrbit('Rainy', 20, 15);
    expect(recommendedOption).to.equal('Tuktuk on Orbit 2');
  });
});
