'use strict'

// When you need a particular resource:
//      /library/book/{bookId}                  => route params
// When you want to tweak details:
//      /library/book?count=10&startswith=q     => query params
// When you have a lot of data to share (usually with POST):
//      /library/book                           => request body (maybe?) data: {}

/**
 * To serve local files, use `inert`. There are three steps to using it (see them
 * in action below):
 *
 *  1. require('inert')
 *  2. 'register' module so hapi will let it handle some of your routes
 *  3. set up a route for getting static files. make it the last route.
 */

let http = require('http');
let hapi = require('hapi');
let boom = require('boom');
let inert = require('inert');

let Usergroup = require('./constructors');
let Eventgroup = require('./constructors');

// where we're headed
let users = new Usergroup();
let events = new Eventgroup();
// let added = false;
// end imaginary code


const server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: 7000,
});
server.register(inert, () => {});


server.route({
    method: 'GET',
    path: '/constructors/events',

    handler: function (request, reply) {
        reply(events.getAll());
    },
});

server.route({
    method: 'POST',
    path: '/library/add',

    handler: function (request, reply) {
        if (added) {
            reply(boom.badRequest('Already added Huck'));
        } else {
            books.add({
                title: 'Huck Finn',
                author: 'Mark Twain',
            });

            added = true;

            reply();
        }
    },
});

server.route({
    method: 'POST',
    path: '/library/borrow/{bookId}',

    handler: function (request, reply) {
        books.borrow(parseInt(request.params.bookId));

        reply();
    },
})

/**
 * Static serving of files. Web requests are all GET requests, and the
 * path is basically saying "anything" here. Retrieve the specified files
 * from the public/ directory (where your gulpfile should be outputting
 * to) and return them.
 */
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public/',
            redirectToSlash: true,
            index: true
        }
    }
});


server.start();
