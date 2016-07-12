let part = angular.module('VolDirectives');

// The name matters; this is the HTML element name in this case.
part.directive('userdir', function () {
    return {
        restrict: 'E',  // this directive is an HTML element
        templateUrl: 'templates/directives/user.html',  // template to use
        scope: {
            // http://stackoverflow.com/questions/26409460/angularjs-pass-argument-to-directive
            //
            // if you care about user input: = is two-way binding
            // else @ simply reads the value (one-way binding)
            //
            // info="x" is a thing that should henceforth be called 'book'
            userdir: '=info',
        },
        // Good idea: don't leave random names scattered throughout your HTML elements
        replace: true,
    };
});
