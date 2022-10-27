const Ship = require("../src/Ship.js");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary")

describe("Ship", () => {

  beforeEach(() => {
    port = new Port("Dover");
    itinerary = new Itinerary([port]);
    ship = new Ship(itinerary);
  });

  it("can be instantiated", () => {
    expect(Ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(port);
  });

  it('gets added to port on instantiation', () => {
    expect(port.ships).toContain(ship);
  });

});

describe("setSail", () => {

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it("can set sail", () => {

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  it("port removes ship after setting sail", () => {

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });

  it("can\'t sail further than its itinerary", () => {
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});

describe("dock", () => {

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
  });

  it("can dock at a different port", () => {

    expect(ship.currentPort).toBe(calais);
  });

  it('port accepts ship upon docking', () => {
  
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});