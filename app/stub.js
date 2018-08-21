function App() {

}

App.prototype.getName = function() {

};

App.prototype.hasValidName = function(appName) {
    if(appName.length >= 5){
        return true;
    } else {
        return false;
    }
};


module.exports = App;