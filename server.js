const express = require('express');

const app = express();

app.get('/',(re,res) => res.send("API is running"))

const PORT  = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on the Port ${PORT}`))