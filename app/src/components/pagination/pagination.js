import React, { Component, Fragment } from 'react'

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.items = [],
    this.iItems = 3;
  };

  componentDidMount = () => { };

  componentWillMount = () => { };

  render() {
    this.items = [];

    if (this.props.totalPages > this.iItems) {
      for (let i = 0; i < this.iItems; i++) {
        this.items.push(
          <li
            className={this.props.currentPage === (i + 1) ? `page-item active` : 'page-item'}
            onClick={() => this.props.onChangePag(i)}
          >
            <a className="page-link" href="#">{i + 1}</a>
          </li>
        );
      };
      this.items.push(
        <li className={this.props.currentPage > this.iItems ? `page-item active` : 'page-item disabled'}>
          <a className="page-link" href="#">{this.props.currentPage > this.iItems ? this.props.currentPage : '...'}</a>
        </li>
      );

    }else{
      for (let i = 0; i < this.props.totalPages; i++) {
        this.items.push(
          <li className={this.props.currentPage === (i + 1) ? `page-item active` : 'page-item'}>
            <a  onClick={() => this.props.onChangePag(i)} className="page-link" href="#">{i + 1}</a>
          </li>
        );
      };
    };
    return (
      <ul className="pagination justify-content-center mt-2">
        <li className={`page-item ${(this.props.currentPage <= 1) ? 'disabled' : ''}`}>
          <a onClick={this.props.previousPage}  className="page-link"  tabIndex="-1">Prev</a>
        </li>

        {this.items.map((item, key) => <Fragment key={key}>{item}</Fragment>)}

        <li className={`page-item ${this.props.finalPages ? 'disabled' : ''}`}>
          <a onClick={this.props.followingPage} className="page-link"  tabIndex="-1">Next</a>
        </li>
      </ul>
    );
  }
}
export default Pagination;