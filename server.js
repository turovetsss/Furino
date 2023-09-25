const Fastify = require('fastify'); // подключение модуля `fastify`, который используется для создания и настройки WebSocket сервера.
const path = require('node:path'); //подключение модуля `path`, который используется для работы с путями к файлам и директориям.
const fs = require('fs'); // подключение модуля `fs`, который используется для работы с файловой системой (чтение и запись файлов).
const livereload = require('livereload'); //подключение модуля `livereload`, который используется для автоматической 

const fastify = Fastify();//создание инстанса Fastify сервера

fastify.get('*', (request, reply) => {//настройка обработчика GET запросов для всех URL путей.
  const url = request.url; //получение URL адреса из объекта запроса.
  let filePath = url.split('?')[0]; //разделение URL по символу "?" и получение пути к файлу/странице.
  const fileName = filePath.split('/').pop(); //разделение пути к файлу на отдельные части и получение имени файла.

  if(!filePath || !fileName) { //проверка, если путь к файлу или имя файла не были предоставлены, то добавляется к имени пути "index.html".
    filePath += 'index.html';
  } else if(!fileName.includes('.')){ //проверка, если имя файла не содержит символа ".", то добавляется "/index.html" к пути.
    filePath += '/index.html';
  }

  try { 
    const file = fs.readFileSync(path.join(__dirname, 'src', filePath)); 
    //Вначале код пытается прочитать файл, указанный в переменной filePath, используя метод fs.readFileSync. 
// Путь к файлу формируется с помощью функции path.join,
//которая объединяет части пути.
//Затем проверяется расширение файла: 
    if(filePath.includes('.html')){ 
      const SCRIPT = '<script src="http://localhost:35729/livereload.js?snipver=1"></script></head>';
      let fileString = file.toString();
       // - Если это файл с расширением '.html', то добавляется скрипт для livereload внутри тега </head> или </html>.
      // Если ни один из этих тегов не найден, то скрипт добавляется в конец файла.
      if(fileString.includes('</head>')){
        fileString = fileString.replace('</head>', `${SCRIPT}</head>`);
      } else if(fileString.includes('</html>')){
        fileString = fileString.replace('</html>', `${SCRIPT}</html>`);
      } else {
        fileString += SCRIPT;
      }

      reply.type('text/html').send(fileString);
    }

    if(filePath.includes('.css')){   //Если это файл с расширением '.css', то он отправляется в ответе с типом 'text/css'.
      return reply.type('text/css').send(file);
    }

    // if(filePath.includes('.png')){
    //   return reply.type('text/png').send(file);
    // }

    reply.type(null).send(file);//  - Если это другой тип файла, то он отправляется в ответе без указания типа.
  } catch { //Если происходит ошибка при чтении файла, то в ответе устанавливается код состояния 404. 
    reply.code(404).send();
  }
})

const livereloadServer = livereload.createServer();//создается сервер livereload и отслеживается папка src для автоматической перезагрузки страницы при изменении файлов.
livereloadServer.watch(__dirname + "/src");
//сервер начинает слушать на порте 80 и в случае ошибки выводится сообщение "Server started".
fastify.listen({ port: 80 }, (err) => {
  if (err) throw err;
  console.log('Server started');
})