const express = require("express");
const app = express();
const knex = require("./database.js");
const port = process.env.PORT;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knex.select("*").from("contacts");

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    const format = /^[a-zA-Z_ ]+$/;
    const isValid = format.test(orderBy);
    if (orderBy.length > 0 && isValid) {
      query = query.orderByRaw(orderBy);
    } else {
      return res.status(400).json({ Error: "Invalid sort by" });
    }
  }

  // another preventing SQL infection method: prepare statment. using placeholder ?? instead of insert user query directly to the database
  // by using placeholder, Knex.js ensures that the column name is properly escaped and quoted before being included in the query
  // got this from internet*

  // if ("sort" in req.query) {
  //   const orderBy = req.query.sort.toString();
  //   const format = /^[a-zA-Z_ ]+$/;
  //   if (orderBy.length > 0) {
  //     const safeQuery = knex.raw("??", [orderBy])
  //     query = query.orderByRaw(safeQuery);
  //   }
  // }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
