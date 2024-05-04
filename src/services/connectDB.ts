import mongoose from "mongoose";

// Config to Use DotEnv
import dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

export const connectDB = async () => {
  //Conectando ao mongo
  try {
    mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@users.jg1dcet.mongodb.net/`
    );
    console.log("Conectado ao Banco de dados");
  } catch (err) {
    console.log(err, "Erro de conexão com o Banco de Dados");
  }
};
