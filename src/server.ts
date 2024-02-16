import express from "express";
import bodyParser from "body-parser";
import Status from "./routes/status-route";
import User from "./routes/user/user-route";

const server = express();

server.use(bodyParser.json());

server.use("/api", Status);
server.use("/api", User);

export { server };
