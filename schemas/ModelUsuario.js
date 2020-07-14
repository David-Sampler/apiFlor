const mongoose = require('../connectionDB/conexao')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const Usuario = new mongoose.Schema(
{
 
    nome:{
        type:String,
        require:true,
        uppercase: true
    },
     
    password:{
        type:String,
        required:true,        
        select:false,
        set: (value) => crypto.createHash('md5').update(value).digest('hex')
      
    },
    email:{
        type:String,
        unique:true,
        lowercase:true
    },

    perfil:{
        nome:String,
        permissao:[]
    }      
    ,

    criado:{
        type:Date,
        default:Date.now
    }
 
    

})

/*Usuario.pre('save', async function (next){
    
    try {
        const hash = await bcrypt.hash(this.password,10)
        console.log(hash)
        this.password = hash
        next()
    } catch (error) {
        console.log("erro",error)
    }
   
})*/


const user = mongoose.model("Usuario",Usuario)

module.exports = user