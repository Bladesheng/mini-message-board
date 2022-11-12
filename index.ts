import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req: Request, res: Response) => {
  res.render("pages/index", {
    messages: messages
  });
});

app.get("/new", (req: Request, res: Response) => {
  res.render("pages/new");
});

app.use((req: Request, res: Response) => {
  res.status(404);
  res.sendFile(path.resolve("public/404.html"));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
