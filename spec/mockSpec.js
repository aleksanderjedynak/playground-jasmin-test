var App = require('../app/mock');

describe('Create App', function(){

    it('should call saveApp() when app name is at least 5 chares long', function(){
        var app = new App();
        spyOn(app, 'savaApp');
        app.createApp('to do List');
        expect(app.savaApp).toHaveBeenCalled();
    });

    it('should NOT call saveApp() when app name is 3 chares long', function(){
        var app = new App();
        spyOn(app, 'savaApp');
        app.createApp('NOT');
        expect(app.savaApp).not.toHaveBeenCalled();
    });

    it('should call saveApp() with app name', function(){
        var app = new App();
        spyOn(app, 'savaApp');
        app.createApp('Aleksander');
        expect(app.savaApp).toHaveBeenCalledWith('Aleksander');
    });

    it('should call saveApp() twice', function(){
        var app = new App();
        spyOn(app, 'savaApp');
        app.createApp('Aleksander');
        app.createApp('Aleksander');
        expect(app.savaApp.calls.length).toBe(2);
    });
});