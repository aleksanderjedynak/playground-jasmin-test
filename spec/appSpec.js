var App = require('../app/app');

describe('App', function () {

    var toDoList;
    var resetToDoList;
    beforeEach(function(){
        toDoList = new App(5, 'ToDoList');
        console.log(['beforeEach ====>']);
    });

    afterEach(function(){
        toDoList.reset();
        console.log(['afterEach ====>']);
    });

    it('getName() method should return app name when called on App instance', function () {
        expect(toDoList.getName()).toEqual('ToDoList');
    });
    it('getId() method should return app Id when called on App instance',function () {
        expect(toDoList.getId()).toEqual(5);
    });
});