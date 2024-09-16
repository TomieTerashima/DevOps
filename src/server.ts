import fastify from 'fastify';

const app = fastify();

app.get('/hello', () => {
  return 'Olá Mundo!';
});

app.listen({
  port: 3333
}).then (() => {
  console.log('Server is running');
});