import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) =>{
  try {
    const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/4000");
    const result = response.data;
    res.render("index.ejs", {dataImg: result.primaryImageSmall, altName: result.objectName});
  } catch (error) {
    console.error("failed to make request:", error.message);
    console.log(error.result)
    res.status(500).send("Failed to fetch artwork. Please try again.");
  }
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });