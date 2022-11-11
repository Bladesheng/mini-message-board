import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");

const user = {
  firstName: "Tim",
  lastName: "Cook",
  admin: true
};

const posts = [
  { title: "Title 1", body: "Body 1" },
  { title: "Title 2", body: "Body 2" },
  { title: "Title 3", body: "Body 3" },
  { title: "Title 4", body: "Body 4" }
];

app.get("/", (req: Request, res: Response) => {
  res.render("pages/index", {
    user: user
  });
});

app.get("/articles", (req: Request, res: Response) => {
  res.render("pages/articles", {
    articles: posts
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
