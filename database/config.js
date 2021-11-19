const mongoose =  require('mongoose');


const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGOBD_CNN)

        console.log("Base de datos online");

    } catch (error) {
        console.log(error);
        throw new Error("Error en la coneccion a la BD");
    }
}


module.exports = {
    dbConnection
}