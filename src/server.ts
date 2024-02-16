import express from "express";
import bodyParser from "body-parser";
import Status from "./routes/status-route";

const server = express();

server.use(bodyParser.json());

server.use("/api", Status);

export { server };
