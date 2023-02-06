const mongoose = require("mongoose");
const express = require("express");
const Joi = require ("joi");
const cors = require('cors');
const app = express()
const bodyParser = require("body-parser");
const PORT = 8080;
app.use(bodyParser());
app.use(cors())


const NitroSchema = new mongoose.Schema({
    name1: String,
    description: String,
    name2:String
    
  });
  
  const NitroModel = mongoose.model("Nitro", NitroSchema);
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      `mongodb+srv://Susen:77ccuZiYoAc54UIO@cluster.91dhbal.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));
  
  const addNitroSchema = Joi.object({
    name1: Joi.string().required(),
    description: Joi.string().required(),
    name2: Joi.string().required(),
    
  });
  
  app.get("/api/nitros", (req, res) => {
    NitroModel.find(null, "name1 description name2 ", (error, nitros) => {
      if (error) return res.status(500).send({ error });
      res.send(nitros);
    });
  });
  
app.get("/api/nitros/:id", (req, res) => {
    if (req.params.id)
      NitroModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });



  app.post(
    "/api/nitros",
    (req, res, next) => {
      const { error } = addNitroSchema.validate(req.body);
  
      if (error == null) next();
      else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        res.status(422).json({ error: message });
      }
    },
  
    (req, res) => {
        console.log(req.body)
      let newNitro = new NitroModel({ ...req.body });
  
      newNitro.save();
      res
        .status(201)
        .send({ message: "Nitro succesfully added!", nitros: newNitro });
    }
  );
  
  app.delete("/api/nitros/:id", (req, res) => {
    if (req.params.id)
    NitroModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });

  app.listen(PORT, () => {
    console.log("Server running on " + PORT);
  });