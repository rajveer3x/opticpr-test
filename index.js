"use strict";

// Simple in-memory users store and safe helpers
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
];

function isValidId(id) {
    return Number.isInteger(id) && id > 0;
}

function getUserById(userId) {
    const id = Number(userId);
    if (!isValidId(id)) throw new Error('Invalid userId');
    return users.find(u => u.id === id) || null;
}

function listUsers() {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

function addUser({ name, email }) {
    if (!name || !email) throw new Error('Missing name or email');
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const user = { id, name, email };
    users.push(user);
    return user;
}

function processCommand(input) {
    // Accept a JSON string or an object with { action, payload }
    let cmd = input;
    if (typeof input === 'string') {
        try {
            cmd = JSON.parse(input);
        } catch (e) {
            throw new Error('Invalid JSON command');
        }
    }
    const { action, payload } = cmd || {};
    switch (action) {
        case 'list':
            return listUsers();
        case 'get':
            return console.log(getUserById(payload && payload.id));
        case 'add':
            return console.log(addUser(payload));
        default:
            throw new Error('Unknown action');
    }
}

if (require.main === module) {
    const raw = process.argv[2];
    if (!raw) {
        console.log('Usage: node index.js \'{"action":"list"}\'');
        process.exit(0);
    }
    try {
        processCommand(raw);
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

module.exports = { getUserById, listUsers, addUser, processCommand };