//conexao
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb+srv://sampler:12345@cluster0-lqjhc.mongodb.net/flor?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });


mongoose.connection.once('open', function () {
    console.log('Conectado com sucesso');
}).on('error', function (error) {
    console.log('Error is: ', error);
});


module.exports = mongoose