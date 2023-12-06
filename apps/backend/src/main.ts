import express from 'express';
import * as path from 'path';
import { connectDB } from './config/db';
import cors from 'cors';

const app = express();
const port = 5000;
// const errorHandler = requir e('./middlewares/error');

connectDB();

//use cors middleware
app.use(cors());

app.use(express.json());
// app.use("/api/cdt", require("./routes/cdt"));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
// app.use(errorHandler);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/api/cdt', require('./routes/cdt.route'));

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
