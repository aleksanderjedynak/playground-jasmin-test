function App() {
}

App.prototype.createApp = function (name) {
    if (name.length >= 5) {
        this.savaApp(name);
    } else {
        return false;
    }
};

App.prototype.savaApp = function(name){
    return true;
}


module.exports = App;