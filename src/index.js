/*global angular*/
import themeConfig        from './modules/theme-config'
import appController      from './controllers/app'
import gamesList          from './directives/games-list'
import gameService        from './services/game'

const app = angular.module('app', ['ngMaterial', 'ngResource']);

app.config(themeConfig)
  .controller('AppController',    appController)

  .factory('gameService',     gameService)

  .directive('gamesList',        gamesList)

