const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
