import express from 'express';
import request from 'request';

const portRandom = (min = 1000, max = 9999) => Math.floor(min + Math.random() * (max + 1 - min));

export const serverProxy = () => {
    const
        app = express(),
        port = portRandom();
    app.use('/', (req, res) => {
        const url = req.url.replace('/?url=', '');
        req
            .on('error', error => console.log('error proxy',error))
            .pipe(request(url).on('error', error => console.log('error proxy request', error)))
            .pipe(res);
    });
    const serverproxy = app.listen(port, () => console.log(`*** SERVER PROXY OPEN http://localhost:${port} ***`));
    return ({ port, serverproxy });
};