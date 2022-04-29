import app from './app';
import models from './db/models';
const { sequelize } = models;
const PORT = process.env.NODE_LOCAL_PORT || 8000;
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.MYSQLDB_LOCAL_PORT || 3307;


app.on('ready', () => {
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
});

// Only start server if db is alive
Promise.all([sequelize.authenticate(), sequelize.sync()])
    .then(() => {
        console.log(`Connected to mysql://${DB_HOST}:${DB_PORT}`);
        app.emit('ready');
    })
    .catch(err => {
        console.error(`App Init ${err.stack}`);
        throw err;
    });
