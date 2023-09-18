import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { WillType } from "./models/willTypeModel.js";
import { willTypesData } from "./Data/willTypes.js";
import router from "./routes/willTypesRoutes.js";

// Configure Express
const app = express();

// Middleware for parsing req body
app.use(express.json());

// Routes middleware (willType Routes)
app.use("/", router);

// Connect to mongoDB database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");

    // Start the SERVER (App)
    app.listen(PORT, () => {
      console.log("listening  on  port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
