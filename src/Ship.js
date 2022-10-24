

class Ship {
  constructor(startingPort) {

    this.currentPort = startingPort;

  };

  setSail() {
    this.currentPort = "";
  };

  dock(port) {
    this.currentPort = port;
  }
};

module.exports = Ship ;