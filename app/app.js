function App(id, name) {
    this.id = id;
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}

App.prototype.getId = function(){ return this.id};

module.exports = App;