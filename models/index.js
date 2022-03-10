// Setting up the database connection
const knex = require('knex')({
	debug: true,
	client: 'mysql',
	connection: process.env.CLEARDB_DATABASE_URL || {
		host: process.env.DB_HOST || 'localhost',
		port: process.env.DB_PORT || 3306,
		charset: process.env.DB_CHARSET || 'utf8mb4',
		database: process.env.DB_NAME || 'photos',
		user: process.env.DB_USER || 'photos',
		password: process.env.DB_PASSWORD || '',
	}
});

const bookshelf = require('bookshelf')(knex);

const models = {};
models.Photo = require('./Photo')(bookshelf);
models.User = require('./User')(bookshelf);
models.Album = require('./Album')(bookshelf);
models.AlbumsPhotos = require('./AlbumPhotos')(bookshelf);

module.exports = {
	bookshelf,
	...models,
};
