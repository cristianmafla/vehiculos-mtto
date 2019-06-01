import React from 'react';
import Helmet from 'react-helmet';
import TemplateLayout from '../templateLayout';

export default ({ message }) => (
  <TemplateLayout pathUrl="login">
    <Helmet>
      <title>not authorized</title>
    </Helmet>
    <div className='container'>
      <div className='col-sm-8 col-lg-5 mx-auto form break-word '>
        <h1 className="h3 mb-3 font-weight-normal text-center">Not authorized </h1>
        <h2 className="h4 font-weight-normal text-center">{message}</h2>
      </div>
    </div>
  </TemplateLayout>
);