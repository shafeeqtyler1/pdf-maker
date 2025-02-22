// urlHelper.js
const path = require('path');

function url(pathName) {
    const host = process.env.APP_URL || 'http://localhost';
    const port = process.env.PORT || 3000;

    return `${host}:${port}/${pathName}`;
}

function storage(pathName) {
    return url(`storage/${pathName}`);
}

module.exports = { url, storage };
