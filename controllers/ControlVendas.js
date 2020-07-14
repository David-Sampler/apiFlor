const modelVendas = require("../schemas/ModelVendas")

module.exports = {

    allVendas: async (req, res) => {

        let vendas = await modelVendas.find()
        console.log(vendas)
    },

    inserirVenda: async (req, res) => {
        try {
            let venda = req.body 
            console.log(venda)
            
            await new modelVendas({
                usuario:req.body.usuario,
                cliente:req.body.cliente,
                servico:req.body.servico,
                totalVenda:req.body.totalVenda,
                pagamento:req.body.pagamento
            }).save()
            
            console.log("Venda com sucess")

        } catch (error) {
            console.log(error)
        }
        res.json({ msg: "Vendas Cadastrada com sucesso" })
    },

    excluirVenda: async (req, res) => {
        console.log(req.params.id)
        try {
            let del = await modelVendas.deleteOne(req.params._id)
            console.log("excluido com sucess")
            res.json({ msg: "Excluido com sucesso" })

        } catch (error) {
            console.log(error)
        }


    },

    updateVendas: async (req, res) => {


        let dados = await modelVendas.updateOne(req.params._id, {
            usuario: req.body.usuario,
            cliente: req.body.cliente,
            servico: req.body.servico
        })



        res.json({ msg: "Update Realizado com sucesso" })
    }

}