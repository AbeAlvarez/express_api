const express = require ('express')
const app = express ()
app.use(express.json())

const port = 3000

//Endpoint
//Routes
//Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers/:id', (req, res) =>{
    console.log( `Get by id Launch X V1 API ${new Date()}`)
    const explorer1 = {id:007, name:"John Connor"}

    //HTTP CODE STATUS: 200
    res.status(200).json(explorer1) 
})

app.listen(port, () => {
    console.log(`Example app listening  on port ${port}`)
})