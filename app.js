require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const homeRouter = require('./routes/home.routes');
const authRouter = require('./routes/auth.routes');

const sessionConfig = {
  // сессии будут храниться в файлах
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'rV2oad;K>S', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    // path: '/count'
  },
};

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static('public'));

// эта миддлварка расшифровывает их и кладёт в req.body
app.use(express.urlencoded({ extended: true }));

// расшифровывает json, который отправляется в запросах от клиента
app.use(express.json());

// подключаем логирование запросов
app.use(morgan('dev'));

// миддлварка для работы с сессиями
app.use(session(sessionConfig));
// мидлварка для статики
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log('Server started at port', PORT));
