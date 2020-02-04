import app from './app'

async function start() {

    await app.listen(3000, () => {
        console.log('listen on port 3000')
    });
}

start();
