import React, { Component } from 'react';

class MessageFlash extends Component {
    constructor(props){
        super(props);
        this.state = { classMessage:"error_message" };
    }

    render() {
        const {error, message } = this.props.errorValid;
        if(error){
            this.state.classMessage="alert alert-danger fade show margint text-center";
        }else{
            this.state.classMessage="error_message";
        }
        return (
            <div className={this.state.classMessage}>
                <strong>Error!</strong> {message}
                <button onClick={this.props.closeError} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> 
            </div>
        );
    }
}

export default MessageFlash;