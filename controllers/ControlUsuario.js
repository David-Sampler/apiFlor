const Usuario = require('../schemas/ModelUsuario')
const jwt = require('../setup/jwt')
const { verify } = require('jsonwebtoken')

module.exports = {


    allUsuario: async (req, res) => {

        let user = await Usuario.find()
        res.send(user)
    },

    insertUsuario: async (req, res) => {
        const { email } = req.body

        try {
            if (await Usuario.findOne({ email }))
                return res.send({ msg: "Usuario já existe" })

            let user = await Usuario.create(req.body)

            const { password, ...ModelUsuario } = user.toObject()
            console.log(ModelUsuario)

            //token
            const token = jwt.sign({ user: ModelUsuario.id })
            console.log(token)

            res.send({ ModelUsuario, token })

        } catch (error) {
            console.log(error)
        }

    },

    loginUser: async (req, res) => {

      
        const { email, password } = req.body
        console.log(email, password)
        dado = false
        try {
          
            const user = await Usuario.findOne({ email, password })
          
            if(user){
                const token = jwt.sign({ user: user.id })
                return res.send({ user, token })
            }else{
                return res.json(dado)
            }
            

        } catch (error) {
            console.log(error)
        }

    },

    /*VerifyAutentic: async (req,res)=>{        
        const users = await Usuario.find()
        res.send(users)        
    },*/

    deletarUsuario: async (req, res) => {
        try {

            let filtro = await Usuario.deleteOne({ _id: req.params.id })
            res.send({ usuario: filtro }, "excluido com sucesso")

        } catch (error) {
            console.log(error)
        }

    },

    atualizarUsuario: async (req, res) => {
        console.log(req.body)
        try {
            let filtro = await Usuario.findOneAndUpdate({ _id: req.params.id }, req.body)
            res.send("atulizado com sucesso")
        } catch (error) {
            console.log(error)
        }


    }


}