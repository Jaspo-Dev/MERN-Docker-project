// server.js
import bodyParser from 'body-parser';
import express from 'express';
import router from '././routes';
import postRouter from '././routes/post.routes';
import './config/mongodb.config';

const app = express();
const PORT = process.env.PORT ? process.evn.PORT : 8080;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/api', router);
app.use('/api/posts', postRouter);

app.get('/', function(req, res){
  res.send('Hello, everyone! from the Server ');
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

export default app;
