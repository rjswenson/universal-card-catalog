
function GamesList($timeout, gameService) {
  return {
    template:   require('./index.jade'),
    restrict:   'E', // E means access like: <games-list />
    scope:      { },
    link: (scope, el, attrs) => {
      scope.createGame = createGame
      scope.selectGame = selectGame

      function createGame() {
        let key = (Math.random()).toString().slice(2, 6)
        gameService
          .create({ name: `Test Game ${key}`, key: `test_${key}`, units: [], year: 2016 })
          .then(result => {
            alert(`Created Game! ${JSON.stringify(result)}`);
          })
          .catch(err => alert(`Error! ${err.message}`))
        // Now refresh
        getGames()
      }
      function selectGame(game) {
        alert(`You selected game: ${game.name}`)
        scope.selected = game
      }
      function getGames() {
        gameService
          .query({})
          .catch(err => alert(`Error! ${err.message}`))
          .then(data => scope.games = data) // blammo, we got our data loaded to `games` - jade/view will pick this up
      }
      // init code
      if (!scope.games || scope.games.length <= 0) {
        getGames()
      }
    }
  }
}

export { GamesList as default }
