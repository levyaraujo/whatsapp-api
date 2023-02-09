import express from "express";
import { router } from "./router";

const app = express();
app.use(router);
app.use(express.urlencoded({ extended: true }));
const port = 8080 || process.env.PORT;



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
