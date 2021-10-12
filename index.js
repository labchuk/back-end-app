const express = require('express');
const cors = require('cors');


const PORT = 5000;
const app = express()

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}
start()