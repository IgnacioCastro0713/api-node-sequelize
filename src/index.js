import app from './app'
import '@babel/polyfill';
import db from "./app/models";


async function main() {

    db.sequelize.sync().then(async function() {
        await app.listen(process.env.PORT || 3000, () => {
            console.log('listen on port 3000')
        });
    })
}

main();
