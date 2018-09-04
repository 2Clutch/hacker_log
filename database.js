var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/input_log_data';

var client = new pg.Client(connectionString);
client.connect();

var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, fullName VARCHAR(50) NOT NULL, teamName VARCHAR(50) NOT NULL, projectName VARCHAR(50) NOT NULL, update VARCHAR(200) NOT NULL, submit BOOLEAN');
query.on('end', function() { client.end(); });
