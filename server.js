const Fastify = require('fastify');
const path = require('node:path');
const fs = require('fs');
const livereload = require('livereload');

const fastify = Fastify();

fastify.get('*', (request, reply) => {
  const url = request.url;
  let filePath = url.split('?')[0];
  const fileName = filePath.split('/').pop();

  if(!filePath || !fileName) {
    filePath += 'index.html';
  } else if(!fileName.includes('.')){
    filePath += '/index.html';
  }

  try { 
    const file = fs.readFileSync(path.join(__dirname, 'src', filePath));

    if(filePath.includes('.html')){
      const SCRIPT = '<script src="http://localhost:35729/livereload.js?snipver=1"></script></head>';
      let fileString = file.toString();
      
      if(fileString.includes('</head>')){
        fileString = fileString.replace('</head>', `${SCRIPT}</head>`);
      } else if(fileString.includes('</html>')){
        fileString = fileString.replace('</html>', `${SCRIPT}</html>`);
      } else {
        fileString += SCRIPT;
      }

      reply.type('text/html').send(fileString);
    }

    if(filePath.includes('.css')){
      return reply.type('text/css').send(file);
    }

    // if(filePath.includes('.png')){
    //   return reply.type('text/png').send(file);
    // }

    reply.type(null).send(file);
  } catch {
    reply.code(404).send();
  }
})

const livereloadServer = livereload.createServer();
livereloadServer.watch(__dirname + "/src");

fastify.listen({ port: 80 }, (err) => {
  if (err) throw err;
  console.log('Server started');
})