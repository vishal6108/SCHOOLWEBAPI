const Students = require("../models/Students");

exports.students = async (req, res) => {
  try {
    const response = await Students.forge()
      .fetchAll()
      .then(function (data) {
        const res = {
          success: true,
          data: data,
        };
        return res;
      })
      .catch((error) => {
        const res = {
          success: false,
          error: error,
        };
        return res;
      });

    res.json(response);
  } catch (e) {
    console.log(`Failed to Fetch Data : ${e}`);
  }
};











































exports.studentdetail = async (req, res) => {
  try {
    let  { id, name, age, school, sclass, division, status } = req.query;
    const response = await Students.query(function (qb) {
      qb.where("name", "=", name).orWhere("age", "=", age);
    }).fetchAll();
    console.log("response data", response);
     

    return res.json(response);
    
  } catch (e) {
    console.log(`Failed to Fetch Data : ${e}`);
  }
};










































exports.create = async (req, res) => {
  try {
    const { name , age , school , sclass , division ,status } = req.body;

    const response = await Students.forge({
      name: name,
      age: age,
      school: school,
      sclass: sclass,
      division: division,
      status: status,
    })
      .save()
      .then(function (data) {
        const res = {
          success: true,
          data: data,
          message: "Created Successfully",
        };
        return res;
      })
      .catch((error) => {
        const res = {
          success: false,
          error: error,
        };
        return res;
      });

    res.json(response);
  } catch (e) {
    console.log(`Failed to Save Data : ${e}`);
  }
};

exports.get = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Students.forge({
      id: id,
    })
      .fetch()
      .then(function (data) {
        if (data.length != 0) {
          const res = {
            success: true,
            data: data,
          };
          return res;
        } else {
          res.status(404).send({
            success: false,
            message: "No Record Found with valid Id" + id,
          });
        }
      })
      .catch((error) => {
        const res = {
          success: false,
          error: error,
        };
        return res;
      });

    res.json(response);
  } catch (e) {
    console.log(`Failed to Fetch Id Detail : ${e}`);
  }
};

exports.update = async (req, res) => {
  try {
    const { id, name, age, school, sclass, division, status } = req.body;

    await Students.where("id", id)
      .fetch()
      .then(function (students) {
        students
          .save({
            name: name,
            age: age,
            school: school,
            sclass: sclass,
            division: division,
            status: status,
          })
          .then(function (data) {
            const response = {
              success: true,
              data: data,
              message: "Updated Successfully",
            };
            res.json(response);
          })
          .catch((error) => {
            const res = {
              success: false,
              error: error,
            };
            res.json(response);
          });
      })
      .catch((error) => {
        const res = {
          success: false,
          error: error,
        };
        res.json(response);
      });
  } catch (e) {
    console.log(`Failed to Update Detail : ${e}`);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Students.where("id", id)
      .destroy()
      .then(function (data) {
        const res = {
          success: true,
          message: `id ${id} Deleted Successfully`,
        };
        return res;
      })
      .catch((error) => {
        const res = {
          success: false,
          error: error,
        };
        return res;
      });

    res.json(response);
  } catch (e) {
    console.log(`Failed to Delete Student : ${e}`);
  }
};
