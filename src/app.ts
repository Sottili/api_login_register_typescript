import express from "express";
import router from "./router";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const app = express();
//Conectando ao mongo
try {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@users.jg1dcet.mongodb.net/`
  );
  console.log("Conectado ao Banco de dados");
} catch (err) {
  console.log(err, "Erro de conexão com o Banco de Dados");
}

//Config Json Response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config corsOptions
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

//Routes
app.use("/", router);

const port = 3001;
app.listen(port, () => {
  console.log("Aplicação rodando na porta 3001");
});
