const express = require ('express')
const app = express ()
app.use(express.json())

const port = 3000

//Routes
//Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) =>{
    console.log( `Get Launch X V1 API ${new Date()}`)
    const explorer1 = {id:1, name:"explorer1"}
    const explorer2 = {id:2, name:"explorer2"}
    const explorers = [explorer1, explorer2]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers) 
})

app.listen(port, () => {
    console.log(`Example app listening  on port ${port}`)
})