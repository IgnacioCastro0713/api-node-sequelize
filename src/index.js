import app from './app'
import '@babel/polyfill';

async function main() {

    await app.listen(process.env.PORT || 3000, () => {
        console.log('listen on port 3000')
    });
}

main();
