const Port = require("../src/Port");

describe("Port", () => {

  it("can be instantiated", () => {

    expect(new Port()).toBeInstanceOf(Object);

    });

  it("has a name property", () => {

    const port = new Port("Leith");

    expect(port.name).toEqual("Leith");

  });
});

describe("addShip", () => {

  it("can add a ship", () => {

    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);

    expect(port.ships).toContain(titanic);

    port.addShip(queenMary);

    expect(port.ships).toContain(queenMary);

  });
});

describe("removeShip", () => {

  it("can remove a ship", () => {

    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);

    port.removeShip(titanic);

    expect(port.ships).not.toContain(titanic);

    port.removeShip(queenMary);

    expect(port.ships).not.toContain(queenMary);

  });
});