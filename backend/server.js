import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { createServer } from "http";

dotenv.config();

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");

app.use(
    helmet({
        contentSecurityPolicy: false
    })
);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        service: "Mobile Chromium Runtime",
        version: "0.1.0",
        status: "online",
        uptime: process.uptime()
    });
});

app.get("/", (req, res) => {
    res.json({
        name: "Mobile Chromium Runtime",
        status: "Running"
    });
});

server.listen(PORT, () => {
    console.log("");
    console.log("────────────────────────────────");
    console.log(" Mobile Chromium Runtime");
    console.log("────────────────────────────────");
    console.log(` Running on port ${PORT}`);
    console.log(` Health: http://localhost:${PORT}/api/health`);
    console.log("────────────────────────────────");
});
