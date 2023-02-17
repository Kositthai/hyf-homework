const knex = require("knex")({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "123456789",
      database: process.env.DB_NAME || "hyf_node_week3_warmup",
      multipleStatements: true,
    },
  });
  
  const express = require("express");
  const app = express();
  const port = process.env.PORT || 3000;
  
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
        query = query.orderByRaw(orderBy) 
      } else { 
        res.status(400).json({Error: "Invalid sort by"})
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