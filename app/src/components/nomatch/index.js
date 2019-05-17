import React from 'react';
import Helmet from 'react-helmet';
import TemplateLayout from '../templateLayout';

export default ({ location }) => (
  <TemplateLayout pathUrl="login">
    <Helmet>
      <title>is not found</title>
    </Helmet>
    <div className='container'>
      <div className='col-sm-8 col-lg-5 mx-auto form_signin break-word '>
        <h1 className="h3 mb-3 font-weight-normal text-center ">" {location.pathname} "  404 pagina no encontrada</h1>
      </div>
    </div>
  </TemplateLayout>
);

