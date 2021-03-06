const Role =  require('../models/rol');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});        
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
}

//Verificar si el correo existe.
const emailExiste = async(correo) =>{
    const existEmail = await Usuario.findOne({correo});
    if (existEmail) {
        throw new Error(`El correo: ${correo} ya esta en uso`);
    }
}

const existeUsuarioPorId = async(id) =>{    
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe: ${id}`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}



