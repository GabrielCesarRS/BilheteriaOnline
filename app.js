const express = require('express');
const app = express();

app.get("/shows", (req, res) => {
    res.send("vai ter show da Pitty ss");
});

app.listen(4959, function(){
    console.log("Ta ok");
})