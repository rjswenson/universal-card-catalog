import config from '../../config';

/*@ngInject*/
function GameService($resource) {
  var game = $resource(config.apiServerUrl+'game/:id', {id:'@id'}, { create: { method: 'POST' } });
  return {
    get: (id = '') => game.get({id}).$promise,
    remove: (id = '') => game.remove({id}).$promise,
    query: ({name, key, year, tags, units}) => {
      return game.query({name, key, year, tags, units}).$promise
    },
    create: ({name, key, year, tags, units}) => {
      return game.create({name, key, year, tags, units}).$promise
    },
    save: ({id, name, key, year, tags, units}) => {
      return game.save({id, name, key, year, tags, units}).$promise
    },
  }
}

export { GameService as default }
