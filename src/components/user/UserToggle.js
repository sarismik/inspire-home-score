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
                <a onClick={this.props.onClick} className="btn-link user-toggle">
                    Switch to user {this.props.otherUserId}
                </a>
            </div>
        );
    }
}

export default UserToggle;