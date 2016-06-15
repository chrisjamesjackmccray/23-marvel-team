function config($stateProvider) {
  $stateProvider
  .state('new_team', {
    url: '/teams/new',
    controller: 'TeamsController as teamCtrl',
    template: require('./view.html')
  });
}

export default config;
