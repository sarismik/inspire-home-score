import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/userToggle.css';

class UserToggle extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        otherUserId: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div>
                <button onClick={this.props.onClick} className="user-toggle">
                    Switch to user {this.props.otherUserId}
                </button>
            </div>
        );
    }
}

export default UserToggle;