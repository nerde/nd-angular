// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('nd-angular.sessions').directive('withinSession', [
    'CurrentSession', function(CurrentSession) {
      return {
        link: function(scope) {
          return scope.session = CurrentSession;
        }
      };
    }
  ]);

}).call(this);
