export default {
	"development": {
	  "username": "root",
	  "password": null,
	  "database": "api-node-sequelize",
	  "host": "127.0.0.1",
	  "dialect": "mysql"
	},
	"test": {
	  "username": "root",
	  "password": null,
	  "database": "database_test",
	  "host": "127.0.0.1",
	  "dialect": "mysql"
	},
	"production": {
	  "use_env_variable": "DATABASE_URL",
	  "dialect": "postgres"
	}
};
