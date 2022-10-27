const Port = require("../src/Port");

describe("Port", () => {

  beforeEach(() => {
    port = new Port("Leith");
  });

  it("can be instantiated", () => {

    expect(new Port()).toBeInstanceOf(Object);

    });

  it("has a name property", () => {

    expect(port.name).toEqual("Leith");

  });
});

describe("addShip", () => {

  beforeEach(() => {
    port = new Port("Dover");
    titanic = {};
    queenMary = {};
  });

  it("can add a ship", () => {

    port.addShip(titanic);

    expect(port.ships).toContain(titanic);

    port.addShip(queenMary);

    expect(port.ships).toContain(queenMary);

  });
});

describe("removeShip", () => {

  beforeEach(() => {
    port = new Port("Dover");
    titanic = {};
    queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
  });

  it("can remove a ship", () => {

    port.removeShip(titanic);

    expect(port.ships).not.toContain(titanic);

    port.removeShip(queenMary);

    expect(port.ships).not.toContain(queenMary);

  });
});