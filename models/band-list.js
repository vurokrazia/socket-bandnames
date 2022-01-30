const Band = require('./band');
const { v4: uuidv4 } = require('uuid');

class BandList {
  constructor() {
    let list = [];
    var i = 0;
    while (i < 10) {
      //1000000
      list.push(new Band('Banda ' + i));
      i += 1;
    }
    this.bands = list;
  }
  addBand(name) {
    this.bands.push(new Band(name));
  }
  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }
  getBands() {
    return this.bands;
  }
  increaseVotes(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.votes += 1;
      return band;
    });
  }
  changeName(id, newName) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.name = newName;
      return band;
    });
  }
}

module.exports = BandList;
