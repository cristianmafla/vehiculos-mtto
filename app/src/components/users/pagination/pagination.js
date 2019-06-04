import React, { Component, Fragment } from 'react'

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  componentDidMount = () => { };

  componentWillMount = () => { };

  render() {
    const
      previousPage = (this.props.currentPage <= 1) ? 'disabled' : '',
      followingPage = this.props.finalPages ? 'disabled' : '';
    let
      items = [],
      iItems = 4;
    if (this.props.totalPages > iItems) {
      for (let i = 0; i < iItems; i++) {
        items.push(
          <li
            className={this.props.currentPage === (i + 1) ? `page-item active` : 'page-item'}
            onClick={() => this.props.onChangePag(i)}
          >
            <a className="page-link" href="#">{i + 1}</a>
          </li>
        );
      };
      items.push(
        <li className={'page-item disabled'}>
          <a className="page-link" href="#">...</a>
        </li>
      );
      items.push(
        <li className={this.props.currentPage > iItems ? `page-item active` : 'page-item disabled'}>
          <a className="page-link" href="#">{this.props.currentPage > iItems ? this.props.currentPage : iItems + 1}</a>
        </li>
      );

    }else{
      for (let i = 0; i < this.props.totalPages; i++) {
        items.push(
          <li
            className={this.props.currentPage === (i + 1) ? `page-item active` : 'page-item'}
            onClick={() => this.props.onChangePag(i)}
          >
            <a className="page-link" href="#">{i + 1}</a>
          </li>
        );
      };
    };
    return (
      <ul className="pagination justify-content-center">
        <li onClick={this.props.previousPage} className={`page-item ${previousPage}`}>
          <a className="page-link"  tabIndex="-1">Prev</a>
        </li>

        {items.map((item, key) => <Fragment key={key}>{item}</Fragment>)}

        <li onClick={this.props.followingPage} className={`page-item ${followingPage}`}>
          <a className="page-link"  tabIndex="-1">Next</a>
        </li>
      </ul>
    );
  }
}
export default Pagination;



/*

1 junio 21610 pagovirtual pse
aws 365498

*/