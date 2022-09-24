import { Server } from "socket.io";
import httpServer from "./server";

const io = new Server(httpServer);
