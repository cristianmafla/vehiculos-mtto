
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Helmet } from "react-helmet";
import App from '../../src/routes';
import reducers from '../../src/redux_store/reducers';
import { ApolloProvider } from 'react-apollo';
import client from '../../src/graphql_client';

const helmet = Helmet.renderStatic();

const HTML = ( mode , req ) => {
    //( req.session ) ? console.log('|****|req--htmlDevProd.js|****|', req.session) : null;
    let bundleCss = '',
        content = '',
        bundleJs = '<script src="/bundle.js"></script>';

    if (mode === 'production'){
        bundleCss = '<link rel="stylesheet" href="/bundle.css" ></link>';
        content = renderToString(
            <ApolloProvider client={client}>
                <Provider store={createStore(reducers)}>
                    <StaticRouter location={req.url} context={req}>
                        <App />
                    </StaticRouter>
                </Provider>
            </ApolloProvider>
        );
    } else if (mode === 'development'){
        bundleCss = '<link rel="stylesheet" href="">';
    }

    return ( `
        <!doctype html>
        <html lang="es">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

            <!--CONFIG MANIFEST-->
            <link rel="manifest" href="/public/manifest.json"/>
            <meta name="teme-color" content="#333">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js16x16.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js32x32.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js64x64.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js96x96.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js128x128.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js192x192.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js284x284.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js384x384.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js512x512.png">
            <link rel="icon" type="image/png" sizes="" href="/public/assets/img_app/js1024x1024.png">

            <!--METAS IOS-->
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="black">
            <meta name="format-detection" content="telephone=no">
            <meta name="apple-mobile-web-app-title" content="lorem ipsu">
            <link rel="apple-touch-icon" sizes="192x192" href="/public/assets/img_app/js192x192.png">

            <!--METAS WINDOWS-->
            <meta property="og:title" content="lorem ipsu">
            <meta property="og:locale" content="es_MX">
            <meta property="og:type" content="website">
            <meta property="og:image" content="/public/assets/img_app/js284x284.png">
            <meta property="og:site_name" content="loremIpsu">
            <meta property="og:url" content="https://app-graphql.herokuapp.com/">



            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
            <link rel="stylesheet" href="/public/assets/scss/normalize.css">

            ${bundleCss}
            ${helmet.title.toString()}
        </head>
        <body>

            <div id='app'>${content}</div>
            <div id='modal_app'></div>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
            ${bundleJs}
        </body>
        </html>
    `);
};

export default HTML;
