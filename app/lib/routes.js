Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('topics', {
  name: 'topics',
  controller: 'TopicsController',
  where: 'client',
  action: 'topics'
});

Router.route('partners', {
  name: 'partners',
  controller: 'PartnersController',
  where: 'client',
  action: 'partners'
});

Router.route('profile', {
  name: 'profile',
  controller: 'ProfileController',
  where: 'client',
  action: 'view'

});

Router.route('matches', {
  name: 'matches',
  controller: 'MatchesController',
  where: 'client'
});