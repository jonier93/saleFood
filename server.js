import ex from 'express'
import cors from 'cors'
import {router} from './routes/route.js'

let app = ex()

app.use(cors())
app.use(ex.json())
app.use(ex.static("src/build"))
app.use(router)

app.use(function(req, res) {
    res.redirect('/')
});

const port = process.env.PORT || 5000

app.listen(port, function(){
    console.log("Servidor iniciado")
})
