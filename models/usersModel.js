const conx = require('../conx')

// Item Object
module.exports = class Users {
    constructor(id, fName, lName, age) {
        this.id = id;
        this.fName = users.fName;
        this.lName = users.lName;
        this.age = users.age;
    }
    // select all users
    static fetchAll() {
        return conx.execute('SELECT * FROM users');
    }
    // create new user
    static createNew(fName, lName, age) {
        return conx.execute('INSERT INTO users(fName,lName,age) VALUES (?,?,?)', [fName, lName, age]);
    }
    // select singel user
    static getSingelUser(id) {
        return conx.execute('SELECT * FROM users WHERE id = ?', [id]);
    }
    // update selected user
    static updateUser(id, fName, lName, age) {
        return conx.execute('UPDATE users SET fName = ?, lName = ?, age = ? WHERE id = ?', [fName, lName, age, id]);
    }
    // delete selected user
    static deleteUser(id) {
        return conx.execute('DELETE FROM users WHERE id = ?', [id])
    }
}