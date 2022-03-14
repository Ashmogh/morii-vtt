import path from 'path';
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import { getCollection, setUpDB } from './db/Mongo';
import routes from './routes/routes';
import secureRoutes from './routes/secure-routes';
import ownerRoutes from './routes/owner-routes';
import cookieParser from 'cookie-parser';
import { DateTime } from 'luxon';
import MessageController from './controllers/MessageController';

dotenv.config();
setUpDB();

const port = process.env.PORT || 4000;


const main = async () => {
  const app = express();
  const httpServer = createServer(app);

  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:4000"
    }
  });

  // TODO: create separate file for sockets stuff

  io.on("connection", (socket) => {
    // console.log(socket.id);

    socket.on('join-room', room => {
      socket.join(room);
    });

    socket.on('chat message', data => {    
      new MessageController(io, socket.id, data).handleMessage();
    });
  });

  app.use(express.static('src/client/public'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use('/', routes);
  app.use('/', secureRoutes);
  app.use('/', ownerRoutes);

  app.use('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
  });

  httpServer.listen(3000);

  // Handle errors.
  app.use(function(err: any, req: any, res:any, next:any) {
    res.status(err.status || 500);
    res.json({ error: err });
  });

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/?#`);
  });
  }

main();