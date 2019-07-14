import React, { Component } from 'react';
import Menu from './menu';
import NavTop from './nav_top';
import NavBottom from './nav_bottom';

if (process.env.WEBPACK) {
    require('../../assets/scss/index.scss');
}

class TemplateLayout extends Component {
  constructor(props) {
      super(props);
  }

  render(){
    return (
      <div className="div_container">
        <Menu handlerToogle={this.handlerToogle} session={this.props.session || {} }/>
          <main id="content_panel">
            <NavTop pathUrl={this.props.pathUrl} session={this.props.session} />
            <div className="div_general_content"> { this.props.children } </div>
          {/*<NavBottom pathUrl={this.props.pathUrl}/> */}
          </main>
      </div>
    );
  }
}

export default TemplateLayout;