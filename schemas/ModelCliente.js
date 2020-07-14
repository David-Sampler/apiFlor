const mongo = require('../connectionDB/conexao')

const cliente = mongo.model('cliente',
    {
        nome: {
            type: String,
            uppercase: true
        },
        
        endereco: {
            rua:String,
            numero:String,
            complemento:String,
            
        },    
            
        telefone: String,
        
               
        email: {
            type: String,
            unique: true,
            lowercase: true
        },
        criado: Date
    })

module.exports = cliente