const express = require('express')
const app = express()

//Middlewares
app.use(express.json({}))
app.use(express.urlencoded({
    extended : true
}))

const routes = require("./routes/index")(app);
app.set('port',process.env.PORT || 3300)

const server = app.listen(app.get('port'),
function(err){
    if(err) throw err;
    var message = 'Server is Rumming at http://localhost: ' + server.address().port
    console.log(message)
 }
)