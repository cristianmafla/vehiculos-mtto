import express from 'express';
import request from 'request';

const portRandom = (min = 1000, max = 9999) => Math.floor(min + Math.random() * (max + 1 - min));

export const serverProxy = () => {
    return new Promise((resolve, reject) => {
        const
            app = express(),
            port = portRandom();
        app.use('/', (req, res) => {
            const url = req.url.replace('/?url=', '');
            req.pipe(request(url)).pipe(res);
        });
        const serverproxy = app.listen(port, () => {
            console.log(`servidor proxy corriendo por http://localhost:${port}`);
            resolve({ port, serverproxy });
        });
    });
};