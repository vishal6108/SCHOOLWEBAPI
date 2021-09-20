const Users = require('../models/Users')


exports.users = async (req,res) => {
   try {

       const response = await Users
       .forge()
       .fetchAll()
       .then(function(data){
           const res = {
           success: true,
           data: data
           }
           return res;
       })
       .catch(error =>{
           const res = {
             success: false,
             error: error
           };
           return res;

       })

       res.json(response)
       
   } catch (e) {
       console.log(`Failed to Fetch Data : ${e}`)
   }
}




exports.create = async (req, res) => {
  try {

    const{ email , password } = req.body

    const response = await Users.forge({
      email: email,
      password: password,
    })
      .save()
      .then(function (data) {
        const res = {
          success: true,
          data: data,
          message: 'Created Successfully'
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

    const response = await Users.forge({
      "id":id
    })
      .fetch()
      .then(function (data) {
        if(data.length !=0)
        {
            const res = {
              success: true,
              data: data
            }
            return res;
        }else
        {
            res.status(404).send({
                success: false,
                message: "No Record Found with valid Id"+ id
            })
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

    const { id , email , password } = req.body

    await Users
      .where('id',id)
      .fetch()
      .then(function (users) {
        users
          .save({
            email: email,
            password: password
          })
          .then(function (data) {
            const response = {
              success: true,
              data: data,
              message: "Updated Successfully"
            };
            res.json(response);
          })
          .catch(error => {
            const res = {
              success: false,
              error: error,
            }
            res.json(response);
          });
      })
      .catch(error => {
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


exports.delete = async (req,res) =>{
    try {
        const { id } = req.params
        const response = await Users.where("id", id)
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
        console.log(`Failed to Delete User : ${e}`);
    }

};