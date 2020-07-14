const cliente = require('../controllers/ControlCliente')
const usuario = require('../controllers/ControlUsuario')
const servicos = require('../controllers/ControlServico')
const vendas = require('../controllers/ControlVendas')
const middle = require('../midlewares/midleClientes')

module.exports = (app) =>{

    
    app.get('/allcliente',cliente.allcliente);
    app.post('/insertcliente',middle,cliente.inserirCliente);
    app.del('/deletecliente/:id',cliente.excluircliente);
    app.put('/atualizarcliente/:id',cliente.updatecliente);
    app.get('/filtro/:id',cliente.Onecliente)

    app.get('/allUser',usuario.allUsuario)
    app.post('/insertUser',usuario.insertUsuario)
    app.post('/login',usuario.loginUser)
    //app.get('/autenticado',usuario.VerifyAutentic)
    app.del('/deleteUser/:id',usuario.deletarUsuario)
    app.put("/updateUser/:id",usuario.atualizarUsuario)
  
    app.get('/allservicos',servicos.allServicos)
    app.post('/insertservico',servicos.insertServico)
    app.del('/deleteservico/:id',servicos.deletaServico)
    app.put('/atualizarservico/:id',servicos.updateServico)
 
    app.get('/allvendas',vendas.allVendas)
    app.post('/insertvendas',vendas.inserirVenda)
    app.del('/deletevendas/:id',vendas.excluirVenda)
    app.put('/atualizarvendas/:id',vendas.updateVendas)
    

} 