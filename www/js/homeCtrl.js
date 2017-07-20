angular.module("Quotes").controller("homeCtrl", function($scope, colorSrvc) {
    $scope.curColor = colorSrvc.curColor;
    $scope.allColors = colorSrvc.colors;
    /////START SLIDEBOX FUNCTION///////
    $scope.options = {
        loop: true,
        speed: 500,
    }

    $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {
        console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
    });
    /////////END SLIDEBOX FUNCTIONS////////

    $scope.changeColor = function(color) {
        colorSrvc.setColor(color)
    }

}); //end of homeCtrl