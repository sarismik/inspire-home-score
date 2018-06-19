import React, { Component } from 'react';
import PropTypes from "prop-types";

/* TODO integrate Highcharts */

class DailyUsage extends Component {
    static propTypes = {
        onBackToScoreClick: PropTypes.func.isRequired,
        dailyUsage: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div>
                <button onClick={this.props.onBackToScoreClick}>Back to Score</button>
                <div>Highcharts graph coming soon...</div>
            </div>
        );
    }
}

export default DailyUsage;