const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5050;

const uri =
  "mongodb+srv://mathildebindslev:<password>@webdev.tr0tdn0.mongodb.net/?retryWrites=true&w=majority&appName=WebDev";

const client = new MongoClient(
  uri.replace("<password>", process.env.DB_PASSWORD),
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

app.use(cors());

app.get("/api/education", async (req, res) => {
  try {
    await client.connect();

    // Specify the database and collection.
    const database = client.db("WebDevDB");
    const collection = database.collection("WebDevCollection");

    const document = await collection.findOne({ id: "mathilde" });
    console.log("document", document);
    if (document) {
      res.json(document);
    } else {
      res.status(404).send("Document not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to retrieve data from MongoDB");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  /*   console.log("process.env.DB_PASSWORD", process.env.DB_PASSWORD); */
  console.log(`Server is running on http://localhost:${port}`);
});
