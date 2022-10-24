

class Ship {
  constructor(startingPort) {

    this.startingPort = startingPort;
  };

  setSail() {
    delete this.startingPort ;
  }

};

module.exports = Ship ;