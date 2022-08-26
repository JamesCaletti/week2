
const express = require('express')
const app = express();

const cors = require('cors');
const { application, json } = require('express');

app.use(express.static("build"))
app.use(cors())
let units = [


    {
        "id": 0,
        "code": "COMP1010",
        "title": "Fundamentals of Computer Science",
        "offering": [
          "S1",
          "S2"
        ]
      },
      {
        "id": 1,
        "code": "COMP1750",
        "title": "Introduction to Business Information Systems",
        "offering": [
          "S1"
        ]
      },
      {
        "id": 2,
        "code": "COMP2110",
        "title": "Web Technology",
        "offering": [
          "S1",
          "S2"
        ]
      },
      {
        "id": 3,
        "code": "COMP2750",
        "title": "Applications Modelling and Development",
        "offering": [
          "S1"
        ]
      },
      {
        "id": 4,
        "code": "MMCC2045",
        "title": "Interactive Web Design",
        "offering": [
          "S2"
        ]
      },
      {
        "id": 5,
        "code": "COMP3120",
        "title": "Advanced Web Development",
        "offering": [
          "S2"
        ]
      },
      {
        "id": 6,
        "code": "COMP3130",
        "title": "Mobile Application Development",
        "offering": [
          "S1"
        ]
      }

]

app.get('/api/units', (request, response) => {
    response.json(units)
  })

app.get('/api/units/:id', (request, response) => {
let id = request.params.id;

response.json(units.filter((units) => units.id == id));

})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



app.delete('/api/units/:id', (request, response) => {
let id = Number(request.params.id)
    
let newUnits = units.filter(units => units.id !== id);
units = newUnits;

response.send(console.log(newUnits))

    
})