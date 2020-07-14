 const tratamento = (req,res,next) =>{

      let {nome} = req.body

      if(!nome)
      return res.send("Você precisa inserir o nome")
      else 
      next();

}

module.exports = tratamento