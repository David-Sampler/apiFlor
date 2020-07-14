const mongo = require('../connectionDB/conexao')
const vendas = new mongo.Schema(
    {
        usuario: {
            type: String,
            required:true
        },

        cliente: {
           nome:String,
           
           endereco:{
               rua:String,
               numero:String,
               complemento:String
           },

           telefone:String,
           email:String,
           
        },

        servico: [{
            tipo: String,
            valor: Number,
            
        }],

        totalVenda:{
            type:Number
        },

        pagamento:{
            type:String
         },
 
        criado:{
            type:Date,
            default:Date.now()
        }

       
      

    }
)

const venda = mongo.model("venda", vendas)
module.exports = venda