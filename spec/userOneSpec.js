var App = require('../app/userOne');
var User = require('../app/userTwo');

describe('string', function(){

    var toDoList;

    beforeEach(function(){
        toDoList = new App(1, "Alex");
    });

    it('getName() metod should return app name when called on App instance', function(){
        expect(toDoList.getName()).toEqual('Alex');
    });

    it('getId() metod should return app Id when called on App intance', function(){
        expect(toDoList.getId()).toEqual(1);
    });

    it('countUsers() metod should return 2 when App has 2 users', function(){
        var user = new User();
        toDoList.addUser(user);
        toDoList.addUser(user);
        expect(toDoList.countUsers()).toEqual(2);
    });
});