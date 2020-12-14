const express = require("express");
const aws = require("aws-sdk");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const fetchObjects = async (req, res) => {
  try {
    const s3 = new aws.S3();
    const response = await s3.listObjects(
      { Bucket: "ka-app-bartosz" },
      (err, data) => {
        if (err) {
          console.log("error", err);
        } else {
          console.log("succes", data.Contents);
          res.status(200).json(data.Contents);
        }
      }
    );
  } catch (err) {
    res.status(400).json("Cannot fetch data");
  }
};

app.get("/fetchdata", fetchObjects);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
