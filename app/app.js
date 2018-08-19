function App(id, name) {
    this.id = id;
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}

App.prototype.getId = function(){ return this.id};
App.prototype.reset = function () { this.id = null, this.name = null };

module.exports = App;