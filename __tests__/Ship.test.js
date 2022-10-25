const Ship = require("../src/Ship.js");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary")

describe("Ship", () => {

  it("can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(Ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });

});

describe("setSail", () => {

  it("can set sail", () => {

    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  it("can\'t sail further than its itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});

describe("dock", () => {

  it("can dock at a different port", () => {

    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });
});