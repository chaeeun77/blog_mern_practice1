const express = require('express');
const app = express();






//라우터
const profileRoutes = require('./routes/profile')
const userRoutes = require('./routes/user')

app.use('/products', profileRoutes)
app.use('/user', userRoutes)

const PORT = process.env.PORT || 7000;


app.listen(PORT, console.log(`server started at ${PORT}`))