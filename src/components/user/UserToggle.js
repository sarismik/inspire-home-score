import React, { Component } from 'react';
import './styles/userToggle.css';

class UserToggle extends Component {
    otherUserId;
    onClick;

    render() {
        return (
            <div>
                <button onClick={this.props.onClick} className="userToggle">Switch to user {this.props.otherUserId}</button>
            </div>
        );
    }
}

export default UserToggle;