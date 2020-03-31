const db = require("../../database/models");

let checksController = {

findByEmail: function (req, res) {
    console.log("Estoy en checksController "+req.params.email)
    db.users.findOne({ where: { email: req.params.email } })
        .then(user => {
            if(user){
                let respuesta = {
                        meta:{
                            status:302 //found
                        },
                        data:{
                            user
                        }                    
                    }
                return res.json(respuesta)
            }else{
                let respuesta = {
                    meta:{
                        status:404 //not found
                    },
                    data:{
                        user
                    }                    
                }
                return res.json(respuesta)     
            }

    })
     
 
}
}
module.exports = checksController;