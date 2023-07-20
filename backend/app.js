require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParsr = require("body-parser");
// morgan(':method :url :status :res[content-length] - :response-time ms')
app.use(morgan("combined"));
app.use(express.json());
app.use(bodyParsr.urlencoded({ extended: true }));
app.use(bodyParsr.json({ extended: true }));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://watch-ecomm-frontend.onrender.com/');
//     next();
//   });
app.use(cors());

// const whitelist = ["https://watch-ecomm-frontend.onrender.com/"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
// }
// app.use(cors(corsOptions))

app.use(cookieParser());
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Db is connected successfully...");
    // If connection is successful, start the server.
    // app.listen(process.env.PORT || 7000);
  })
  .catch((error) => {
    console.log(error);
  });

const user = require("./routes/userRoute");
const product = require("./routes/productRoute");
app.use("/", user);
app.use("/", product);

app.listen(process.env.PORT || 7000, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
