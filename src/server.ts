import type { Application } from "express";
import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app: Application = express();

app.use(express.json())
app.use(compression({ threshold: 0 }));
app.use(sirv("static", { dev }));
app.use(sapper.middleware());

app.listen(PORT);