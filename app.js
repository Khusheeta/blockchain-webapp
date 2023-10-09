const express = require("express");
const Blockchain = require("./blockchain");
const app = express();
const port = 3001;

const myBlockchain = new Blockchain();

app.use(express.json());

app.get("/blocks", (req, res) => {
  res.json(myBlockchain.chain);
});

app.post("/mine", (req, res) => {
  const newBlock = new Block(
    myBlockchain.chain.length,
    Date.now(),
    req.body.data
  );
  myBlockchain.addBlock(newBlock);
  res.redirect("/blocks");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




