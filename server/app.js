const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const breakfastData =require('./data/menuBreakfast.json')
const lunchData =require('./data/menuLunch.json')
const dinnerData =require('./data/menuDinner.json')
const fs = require('fs')

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/data-breakfast',async(req, res)=>{
    try {
        res.json(breakfastData)
    } catch (error) {
        res.send(error)
    }
})

app.get('/data-lunch',async(req, res)=>{
    try {
        res.json(lunchData)
    } catch (error) {
        res.send(error)
    }
})

app.get('/data-dinner',async(req, res)=>{
    try {
        res.json(dinnerData)
    } catch (error) {
        res.send(error)
    }
})
app.post('/bookings', async (req,res)=>{
    const input = req.body
    let dataJson = JSON.parse(fs.readFileSync('./data/bookData.json','utf-8'))

    let new_id = dataJson.length + 1;

    const newData = {
        id:new_id,
        name:input.name,
        email:input.email,
        date:input.date,
        num:input.num,
        req:input.req
    }

    dataJson.push(newData)
    let data_json = JSON.stringify(dataJson)
    fs.writeFileSync('./data/bookData.json',data_json)
    res.send("new data added")

})


app.listen(port, () => {
    `listening ${port}`
})
