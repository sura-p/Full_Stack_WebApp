const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/db2", function (err) {
    if (err)
        console.log(err);
    console.log("connection established");
});

