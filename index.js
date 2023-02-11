const { url } = require('inspector');

const app = require('express')();

const PORT = 8000;

app.get('/api', (req, res) => {
    console.log(req)
    res.send({

        name: "sneh patel",
        address: "visngar",
        age: 19,
        education: "BCA",
        address : "visngar",
        hobby : "learning new things",

        intrest :{
            coding : "i'm intrested about the coding programing language",
            programing_language : "C programing language , HTML, CSS, JS",
            reading : "i'm  intrested reading the books"
        }
    })
})

app.get('/noapi', (req, res) => {
    console.log(req)
    res.send({

        name: "sneh patel",
        address: "visngar",
        age: 19,
        education: "BCA",
        address : "visngar",
        hobby : "learning new things",
    })
})

app.listen(PORT, () => {
    console.log(`api run --- ${PORT}`)
})