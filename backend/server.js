const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// frontend papkani static qilib ulaymiz
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
