const mongoose = require('../connectionDB/conexao')

const servico = new mongoose.Schema(
    {
        
        tipo:{
            type:String,
            required:true,
            unique:true,
            uppercase: true
        },

        valor:{
            type:Number,
            required:true
        },
        
        criado:{
             type:Date,
             default:Date.now
        }
    }
    
)

const Servico = mongoose.model('servico',servico)

module.exports = Servico