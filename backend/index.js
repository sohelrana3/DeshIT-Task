require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const ProductRoute = require("./router/ProductsRouter");

//middleware start
const app = express();
app.use(express.json());
app.use(cors());
// middleware end

app.use("/api", ProductRoute);
mongoose
  .connect(
    "mongodb+srv://DeshIt:sohel123@cluster0.ltkb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running ${PORT}`);
      console.log("Database connect");
    });
  })
  .catch((error) => {
    console.log("Database connect failed", error);
  });
