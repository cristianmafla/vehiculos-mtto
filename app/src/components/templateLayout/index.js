import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { ANYQUERY} from '../../graphql_client/queries/queryUser';
import NavUser from '../users/nav_user';
import Nav from './nav';

if (process.env.WEBPACK) {
    require('../../assets/scss/index.scss');
};

class TemplateLayout extends Component {
  constructor(props) {
      super(props);
  };

  componentDidMount = () => {
      const Slideout = require('slideout');
      this.slideout = new Slideout({
          'panel': document.getElementById('content_panel'),
          'menu': document.getElementById('menu'),
          'padding': 256,
          'tolerance': 70
      });
  }

  handlerToogle = () => this.slideout.toggle();

  render(){
    return (
      <div className="div_container">
          <Nav handlerToogle={this.handlerToogle} session={this.props.session || {} }/>
          <main id="content_panel">
              <header>
                  <span onClick={this.handlerToogle} className="fas fa-bars"></span>
                  <Link to="/"><h1 className="site_name">Lorem Ipsums</h1></Link>
                  {
                    this.props.pathUrl === 'login'
                      ? null
                      : <Query query={ANYQUERY}>
                        {({ loading, error, subscribeToMore}) => {
                          if(loading) return 'loading...';
                          if (error) return console.log('error_GRAPHQL_ANYQUERY',error);
                          return(
                            <NavUser session={this.props.session} subscribeToMore={subscribeToMore} />
                          );
                        }}
                      </Query>
                  }
              </header>
              <div className="div_general_content">
                  { this.props.children }
              </div>
          </main>
      </div>
    );
  };
}

export default TemplateLayout;