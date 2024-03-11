const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config();
app.set('view engine', 'ejs')

//Rutas
const homeRouter = require('./routes/home')
app.use("/", homeRouter)
app.use('/home', homeRouter)

//Middleware para el manejo de errores (Debe ser el ultimo middleware a utilizar)
const errorhundler = require('./middlewares/errorhandler')
app.use(errorhundler)

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Aplicación de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`)  
});