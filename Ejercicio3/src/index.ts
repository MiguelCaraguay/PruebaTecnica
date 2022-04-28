import express, { response } from 'express'
const app = express()
app.use(express.json())

const PORT = 3001

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

