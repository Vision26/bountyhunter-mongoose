const express =  require('express')
const app = express.Router()
app.use(express.json())

app.listen(8000, () => console.log("Server is Connected."))