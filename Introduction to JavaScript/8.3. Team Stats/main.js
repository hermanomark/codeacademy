const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11
    }
  ],
  _games: [
    {
      opponent: "Broncos", 
      teamPoints: 42, 
      opponentPoints: 27
    }
  ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints ) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Sharks', 12, 10);
team.addGame('Cowboys', 34, 30);
team.addGame('Roosters', 8, 22);
console.log(team._games);

// https://www.youtube.com/watch?v=2CGJBq-74p0