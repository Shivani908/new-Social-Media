const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/mediaPlatform")
    .then(() => console.log("All Set Here !"))
    .catch((err) => console.log(err.message));

