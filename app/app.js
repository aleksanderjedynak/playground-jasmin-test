function App(id, name) {
    this.id = id;
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}

App.prototype.getId = function(){ return this.id};

// var a = new App(1,"test");

// console.log(a.getName());

module.exports = App;