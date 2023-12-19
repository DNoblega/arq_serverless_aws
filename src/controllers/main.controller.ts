import { request, response } from "express";

export const mainController = async (req = request, res = response) => {
    try {
      res.status(200).json({msg: "<{{proyect.description}}>"});
    } catch (error) {
      console.log(error);
      res.status(500).json({msg: "error"});
    }
  };
  