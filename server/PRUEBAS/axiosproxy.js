const axios = require('axios');
const express = require('express');
const request = require('request');

//crea numero aleatorios de 4 digitos para el puerto del proxy
const portRandom = (min = 1000, max = 9999) => Math.floor(min + Math.random() * (max + 1 - min));
//crea un servidor proxy con una ruta "/load" que recibe a url de la api para hacer la redireccion hacia la api
const serverProxy = () => {
    return new Promise((resolve, reject) => {
        const
            app = express()
            port = portRandom();
        app.use('/',(req,res) => {
            const url = req.url.replace('/?url=','');
            req.pipe(request(url)).pipe(res);
        });
        const serverproxy = app.listen(port, () => {
            console.log(`servidor proxy corriendo por http://localhost:${port}`);
            resolve({ port, serverproxy});
        });
    });
}
//realiza la peticion a la api con axios atravez del proxy y luego elimina el servidor proxy
const getCompanyProfile = ticker => {
    serverProxy().then(({ port, serverproxy }) => {
        const companies = axios({
            method: 'GET',
            url: `http://localhost:${port}/?url=https://api.iextrading.com/1.0/stock/${ticker}/company`,
        });
        companies.then(({data}) => {
            console.log('result', data)
            serverproxy.close();
        })
        .catch(error => console.log('error', error));
    });
};
//llamada a la funcion para mostrar la compañia
getCompanyProfile('YI');