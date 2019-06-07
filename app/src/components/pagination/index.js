import React, { Component } from 'react'

class Pagination extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const previousPage = (this.props.currentPage > 1)
            ? <i onClick={this.props.previousPage} className="pagination_left fas fa-chevron-circle-left fa-2x" title="previus"></i>
            : <i className="pagination_left pagination_disable fas fa-chevron-circle-left fa-2x" title="previus"></i>;

        const followingPage = this.props.finalPages
            ? <i className="pagination_right pagination_disable fas fa-chevron-circle-right fa-2x" title="following"></i>
            : <i onClick={this.props.followingPage} className="pagination_right fas fa-chevron-circle-right fa-2x" title="following"></i>;


        return (
            <div className="row mt-2">
                <div className="mx-auto pagination">
                    {previousPage} {followingPage}
                </div>
            </div>

        )
    }
}
export default Pagination;