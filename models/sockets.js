const BandList = require('./band-list');

class Sockets {
  constructor(io) {
    this.io = io;

    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      console.log('New Client');
      socket.emit('current-bands', this.bandList.getBands());
      // Escuchar evento: mensaje-to-server
      socket.on('votar-banda', ({ id }) => {
        this.bandList.increaseVotes(id);
        this.io.emit('current-bands', this.bandList.getBands());
      });
      socket.on('remove-banda', ({ id }) => {
        this.bandList.removeBand(id);
        this.io.emit('current-bands', this.bandList.getBands());
      });
      socket.on('add-banda', ({ name }) => {
        this.bandList.addBand(name);
        this.io.emit('current-bands', this.bandList.getBands());
      });
      socket.on('update-banda', ({ id, name }) => {
        this.bandList.changeName(id, name);
        this.io.emit('current-bands', this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
