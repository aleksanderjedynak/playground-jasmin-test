var App = require('../app/stub');
// var sinon = reqire('sinon');

describe("Hass Valid Name", function(){

    it('should return true when app name is at least 5 chars long', function(){
        var app = new App();
        spyOn(app, 'getName').andCallFake(function(){
            return 'Aleksander';
        });
        var result = app.hasValidName(app.getName());
        expect(result).toBeTruthy();
    });

    it('should return false when app name is 4 chars long', function(){
        var app = new App();
        spyOn(app, 'getName').andCallFake(function(){
            return "ASDF"
        });
        var result = app.hasValidName(app.getName());
        expect(result).toBeFalsy();
    });
});