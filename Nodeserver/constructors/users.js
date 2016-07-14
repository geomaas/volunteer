'use strict'
let fs = require('fs');

module.exports = Usergroup;

function Usergroup() {
    this.nextId = 4;

    this.users = [];
    this.load();

    return this;
}

Usergroup.prototype.load = function () {
    let that = this;

    // where to read from, what 'encoding' (format) its in, what to do once we've read it
    fs.readFile('data/users.json', 'utf8', function (err, contents) {
        // Once we get the data back
        console.log('Loaded user list.');
        that.users = JSON.parse(contents);
    });
};

Usergroup.prototype.save = function () {
    // where to put it, what to put there
    fs.writeFile('data/users.json', JSON.stringify(this.users));
}

Usergroup.prototype.add = function (user) {
    user.id = this.nextId++;

    this.users.push(user);
};

// Usergroup.prototype.borrow = function (id) {
//     for (let i = 0; i < this.books.length; i++) {
//         if (this.books[i].id === id) {
//             this.books[i].borrowed = true;
//         }
//     }
//
//     // Record the borrowing
//     this.save();
// };

Usergroup.prototype.getAll = function () {
    return this.users;
};
