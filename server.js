const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/omni-ib-offer-account-front'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/omni-ib-offer-account-front/index.html'));
});

app.listen(process.env.PORT || 8080);