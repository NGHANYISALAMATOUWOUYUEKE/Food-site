import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4000;
const MONGOURL = "mongodb://localhost:27017/foodsite";
//mongodb://localhost:27017/<database name>

//middleware
app.use(express.json());
app.use(cors());

//api endpiont 
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))

//TEst route
app.get("/", (req, res) => {
  res.send("API Working");
});

//connecting the database
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database is connected successfully.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));



