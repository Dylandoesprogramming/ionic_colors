angular.module("Quotes").controller("homeCtrl", function($scope, colorDataSrvc) {
    $scope.curColor = colorDataSrvc.curColor;

    $scope.getPalettes = function() {
        $scope.allColors = colorDataSrvc.allColors;
    }

    $scope.getPalettes()



    /////START SLIDEBOX FUNCTION///////
    $scope.options = {
        loop: true,
        speed: 500,
    }

    $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {});

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
    });
    /////////END SLIDEBOX FUNCTIONS////////

    $scope.changeColor = function(color) {
        curColor = colorDataSrvc.changeColor(color);
    }

}); //end of homeCtrl