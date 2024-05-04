// Response and Request use express
import { Request, Response } from "express";

// Bcrypt
import { genSalt, hashSync, compare } from "bcrypt";

// Model User
import { User } from "../models/UserModel";

// Json Web Token
import jwt from "jsonwebtoken";

// Config to Use DotEnv
import dotenv from "dotenv";
dotenv.config();

export const RegisterUser = async (req: Request, res: Response) => {
  const { name, telphone, email, password } = req.body;

  //Hash de Senha
  const salt = await genSalt(12);
  const hashPass = hashSync(password, salt);

  const user = new User({
    name: name,
    telphone: telphone,
    email: email,
    password: hashPass,
  });

  // Check if User Exists
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    res.status(422).send("Esse usuário ja existe.");
  }

  try {
    user.save();
    res.status(200).send("Usuário criado com sucesso");
  } catch (err) {
    res.status(404).send("Erro ao criar o usuário");
  }
};

export const AuthenticateUser = async (req: Request, res: Response) => {
  const { email, password, _id } = req.body;

  if (!email) {
    res.status(422).send("O email é obrigatório!");
  }
  if (!password) {
    res.status(422).send("A senha é obrigatória!");
  }

  try {
    const user = await User.findOne({ email: email });

    const checkPass = compare(password, user!.password.toString());

    if (!checkPass) {
      return res.status(422).send("A senha está incorreta.");
    }

    const tkn = process.env.SECRET;

    const token = await jwt.sign(
      {
        _id: _id,
        name: user!.name,
      },
      tkn!,
      {
        expiresIn: 300,
      }
    );
    return res.status(200).send(`Token do usuario:${token}, ${_id}, ${email}`);
  } catch (error) {
    res.status(422).send(error);
  }
};
