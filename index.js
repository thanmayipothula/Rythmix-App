const express = require('express')
const app = express()


app.use(express.static('public'));
app.use('/public', express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname})
  })


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});