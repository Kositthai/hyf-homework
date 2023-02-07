import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// import json to app.js with ES6
import { readFile } from "fs/promises";
const json = JSON.parse(
  await readFile(new URL("./document.json", import.meta.url))
);

app.get("/search", (req, res) => {
  try {
    const q = req.query.q;
    if (!q) {
      res.json(json);
    } else {
      res.json(filterQuery);
    }
  } catch (error) {
    res.status(500).send({ error: error });
    throw error;
  }
});

app.get("/document/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const searchById = await json.filter((data) => data.id === id);
    searchById.length != 0
      ? res.json({ searchById })
      : res.status(404).send("No data");
  } catch (error) {
    res.status(500).send({ error: error });
    throw error;
  }
});

app.post("/search", (req, res) => {
  const q = req.query.q;
  const fields = req.body.fields;

  if (q && fields) {
    res.status(400).send("Invalid request both id and field");
  } else if (fields) {
    const filters = json.filter((obj) => {
      for (let key in fields) {
        if (obj[key] !== fields[key]) {
          return false;
        }
      }
      return true;
    });
    res.json({ filters: filters });
  } else if (q) {
    const filters = json.filter(
      (data) => data.value && data.value.includes(q.toLowerCase())
    );
    res.json({ filters });
  } else if (!q) {
    res.json(json);
  }
});

app.listen(PORT, () => {
  console.log(`server running ${3000}`);
});
