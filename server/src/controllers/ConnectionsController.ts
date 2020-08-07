import { Request, Response, response } from "express";
import db from "../database/connection";

export default class ConnectionControllers {
  async index(request: Request, response: Response) {
    const totalConnections = await db("connections").count("* as total");

    const { total } = totalConnections[0];

    return response.status(200).json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db("connections").insert({
      user_id,
    });

    return response
      .status(201)
      .json({ message: "Conexão criada com sucesso!" });
  }
}
