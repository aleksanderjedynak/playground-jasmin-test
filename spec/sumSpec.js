var app = require('../app/sum');

describe("Math", function(){

    it('should return 8 when 2 and 6 are guven', function(){
        expect(app.sum(2,6)).toEqual(8);
    });

    it('should return true', function () {
        expect(app.isTrue()).toBeTruthy();
        expect(app.isTrue()).toBe(true);
    });

    it('should return undefinde', function () {
        expect(app.isUndefinded()).toBeUndefined();
        expect(app.isUndefinded()).toBe(undefined);
    });

    it('should return not false', function () {
        expect(app.isUndefinded()).not.toBe(false);
    });

    it('should compare two object', function () {
        var a = {};
        var b = a;
        expect(a).toBe(b);
    });


    it('should compare two object', function () {
        var a = {};
        var b = {};
        expect(a).toEqual(b);
    });
});