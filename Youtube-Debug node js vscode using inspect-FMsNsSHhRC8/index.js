const express = require("express");
const app = express();
const port = 3000;

let largeDates = [];

app.get("/hello", (req, res) => {
    for (i = 1; i <= 10000; i++) {
        largeDates.push(new Date());
    }

    res.send("World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
