const servicos = require('../schemas/ModelServico')

module.exports = {

    allServicos: async (req,res)=> {
        try {          
            let filter = await servicos.find()
            res.send(filter)
  
        } catch (error) {
            console.log(error)
        }
      
    },

    insertServico: async(req,res)=>{
        let {tipo} = req.body               

            if(await servicos.findOne({tipo})){
                return res.send({msg:"Serviço já está cadastrado"})
            }else{
                const servico = await new servicos(req.body)           
                servico.save()            
                res.send({msg:"Cadastrado com sucesso",servico})
            } 
            
           
        
    },
    
    deletaServico:async(req,res)=>{
        try {
            let filter = await servicos.deleteOne({_id:req.params.id})
            res.send({msg:"Deletado com sucesso",filter})
            console.log(filter)
        } catch (error) {
            console.log(error)
        }

    },
    
    updateServico:async(req,res)=>{
        try {
            let filter = await servicos.findOneAndUpdate({_id:req.params.id},req.body)    
            res.send(filter) 
        } catch (error) {
            console.log(error)
        }
        
    }
  

}