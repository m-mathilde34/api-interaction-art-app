import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) =>{
  try {
    const response = await axios.get("/public/collection/v1/objects/1");
    const result = response.data;
    res.render("index.ejs, (data: result))");
  } catch (error) {
    console.error("failed to make requests:", error.message);
    res.status(500).send("Failed to fetch artwork. Please try again.");
  }
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });