
import Server from "./src/Server";

const serverless = require('serverless-http');

const app = new Server().app;

export const lambdaHandler = serverless(app);