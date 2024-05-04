// Config Express and Mongoose ConnectDB
import express from "express";
import { connectDB } from "./services/connectDB";

// Router and Use Cors to requests
import router from "./router";
import cors from "cors";

// Config to Use DotEnv
import dotenv from "dotenv";
dotenv.config();

// Connect Database
connectDB();

// Initialize App
const app = express();

// Config Json Response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config corsOptions
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// Routes
app.use("/", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
