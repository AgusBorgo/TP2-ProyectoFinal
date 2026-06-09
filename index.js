import express from 'express';

const app = express();
console.log(`app:`, app);

app.get("/", (req, res) => {
    console.log(`req:`, req);
    res.status(200).send("Hello World");
});

app.listen(8000, () =>{
    console.log('Server ok in port 8000')
});