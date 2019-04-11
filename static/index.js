const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('*', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('App is listening on port 3000...')
})