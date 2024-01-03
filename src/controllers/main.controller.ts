import { request, response } from "express";
export class MainController {
  
  constructor(){

  }
  public async helloword(req = request, res = response){
    try {
      res.status(200).json({msg: "<{{proyect.description}}>"});
    } catch (error) {
      console.log(error);
      res.status(500).json({msg: "error"});
    }
  };
  
}