const express = require('express');
const bodyParser = require('body-parser');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const storageDir = path.join(__dirname, 'storage');
if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use web routes
app.use('/', webRoutes);
// Use API routes
app.use('/api', apiRoutes);
// Serve static files from the storage directory
app.use('/storage', express.static(storageDir));
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
