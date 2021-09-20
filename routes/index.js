const controller = require('../controller/userController')
const scontroller = require('../controller/studentController')
module.exports = function(app)
{
    app.get('/users',controller.users)
    app.post('/create',controller.create)
    app.get('/get/:id', controller.get)
    app.put('/update',controller.update)
    app.delete('/delete/:id',controller.delete)

    app.get("/students", scontroller.students);
    app.get("/student-detail", scontroller.studentdetail);
    app.post("/screate", scontroller.create);
    app.get("/sget/:id", scontroller.get);
    app.put("/supdate", scontroller.update);
    app.delete("/sdelete/:id", scontroller.delete);
}