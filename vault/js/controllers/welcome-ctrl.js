(function(){

  $(document).ready(function(){

    var currentTopUL = 0;

    $(document).on('click', '.switch-li', function(){

      var li = $(this);

      if( li.data('pos') == currentTopUL ) {
        if( li.children('ul').hasClass('in') ) {
          li.children('ul').removeClass('in');
        }
        else {
          li.children('ul').addClass('in');
        }

        currentTopUL = li.data('pos');
        return;
      }

      //

      $('.switch-ul').removeClass('in');
      li.children('ul').addClass('in');

      currentTopUL = li.data('pos');

    });

  });

  /* --- App --- */



  // Main Angular Application
  var App = angular.module("myApp", []);

  // Data-Bind Syntax
  App.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('((');
    $interpolateProvider.endSymbol('))');
  }]);

  // Master Angular Controller
  App.controller('masterCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {



  }]);

})()
