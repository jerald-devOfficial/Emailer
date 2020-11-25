const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // unlike Angela's, Stephen hid the mongoURI so to avoid being uploaded to github

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port 5000.");
});
