'use strict'
let fs = require('fs');

module.exports = Eventgroup;

function Eventgroup() {
    this.nextId = 8;
    this.events = [];
    this.load();

    return this;
}

Eventgroup.prototype.load = function () {
    let that = this;

    // where to read from, what 'encoding' (format) its in, what to do once we've read it
    fs.readFile('data/events.json', 'utf8', function (err, contents) {
        // Once we get the data back
        console.log('Loaded eventslist.');
        that.events = JSON.parse(contents);
    });
};

Eventgroup.prototype.save = function () {
    // where to put it, what to put there
    fs.writeFile('data/events.json', JSON.stringify(this.books));
}

Eventgroup.prototype.add = function (event) {
    // book.borrowed = false;
    events.id = this.nextId++;

    this.events.push(event);
};

// Eventgroup.prototype.borrow = function (id) {
//     for (let i = 0; i < this.books.length; i++) {
//         if (this.books[i].id === id) {
//             this.books[i].borrowed = true;
//         }
//     }
//
//     // Record the borrowing
//     this.save();
// };

Eventgroup.prototype.getAll = function () {
    return this.events;
};
