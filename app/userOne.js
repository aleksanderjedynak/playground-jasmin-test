function UserApp(id, name) {
    this.id = id;
    this.name = name;

}

var userList = [];

UserApp.prototype.getName = function () {
    return this.name;
};

UserApp.prototype.getId = function () {
    return this.id;
};

UserApp.prototype.addUser = function (user) {
    userList.push(user);
};

UserApp.prototype.countUsers = function () {
    return userList.length;
};

module.exports = UserApp;