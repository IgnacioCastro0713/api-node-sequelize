import app from './app'
import '@babel/polyfill';
import db from "./app/models";


async function main() {

  db.sequelize.sync().then(async function () {
    await app.listen(app.get('port'), () => {
      console.log('listen on port: ' + app.get('port'))
    });
  })
}

main(); // url: http://localhost:3000
