import express from "express";
import { router } from "./router";

const app = express();
app.use(router);
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
