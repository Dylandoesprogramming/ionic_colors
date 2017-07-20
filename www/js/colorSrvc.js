angular.module("Quotes").service("colorSrvc", function() {
    this.colors = {
        pastel: ['#a4b6dd', '#d09292', '#c094cc', '#a2d0c0', '#c37892'],
        neon: ["#fe0000", "#fdfe02", "#0bff01", "#011efe", "#fe00f6"]
    }
    this.curColor = this.colors.pastel;

    this.setColor = function(color) {
        this.curColor = this.colors[color]
        return this.curColor;
    }
});