function App() {
}

App.prototype.createApp = function (name) {
    if (name.length >= 5) {
        this.savaApp();
    } else {
        return false;
    }
};

App.prototype.savaApp = function(){
    return true;
}


module.exports = App;