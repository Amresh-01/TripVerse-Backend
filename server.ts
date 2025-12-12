import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import connectDb from "./src/db/db.connect";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "someSecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("TripVerse Backend is running....");
});


const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running on Port http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error("Server is Not running.." , error)
    process.exit(1);
  }
};

startServer();