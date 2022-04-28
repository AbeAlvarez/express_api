const express = require ('express')
const app = express ()
app.use(express.json())

const port = 3000

//Endpoint
//Routes
//Methods HTTP: GET, POST, PUT, DELETE

app.get('/v1/explorers', (req, res) =>{
    console.log( `GET by id Launch X V1 API ${new Date()}`)
    const explorer1 = {id:1, name:"John Connor"}
    const explorer2 = {id:8, name:"Rick Sanchez"}
    const explorers = [explorer1, explorer2]

    //HTTP CODE STATUS: 200
    res.status(200).json(explorers) 
})

app.get('/v1/explorers/:id', (req, res) =>{
    console.log( `GET by id Launch X V1 API ${new Date()}`)
    const explorer1 = {id:1, name:"John Connor"}

    //HTTP CODE STATUS: 200
    res.status(200).json(explorer1) 
})

app.post('/v1/explorers', (req, res) =>{
    console.log(`POST Launch X V1 API ${new Date()}`)
    
    console.log(req.body)
    res.status(201).json({message:"Creado exitosamente"})
})

app.put('/v1/explorers/:id', (req, res) =>{
    console.log(`PUT Launch X V1 API ${new Date()}`)
    console.log(req.body)
    console.log(req, params, id)

    res.status(201).json({message:"Actualizado exitosamente"})
})

app.delete('/v1/explorers/:id', (req, res) =>{
    console.log(`DELETE Launch X V1 API ${new Date()}`)

    res.status(201).json({message:"Se eliminó exitosamente"})
})


app.listen(port, () => {
    console.log(`Example app listening  on port ${port}`)
})