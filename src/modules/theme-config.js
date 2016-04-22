
// See https://material.angularjs.org/latest/Theming/01_introduction
function themeConfig($mdThemingProvider) {
  // Change theme here
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue')
    .warnPalette('red');
}

// One way to explicitly declare deps, using the function member `$inject`
themeConfig.$inject = ['$mdThemingProvider'];

export { themeConfig as default };
