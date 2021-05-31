const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const port = 5000;

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || port,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'] // untuk mengizinkan semua origin mengakses backend
      }
    }
  })

  server.route(routes);

  await server.start();

  console.log(`server berjalan di ${server.info.uri}`);
}

init();