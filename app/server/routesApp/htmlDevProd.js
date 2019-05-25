
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
        bundleJs = '<script src="bundle.js"></script>';

    if (mode === 'production'){
        bundleCss = '<link rel="stylesheet" href="bundle.css" ></link>';
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
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
            <link rel="stylesheet" href="public/assets/scss/normalize.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

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
