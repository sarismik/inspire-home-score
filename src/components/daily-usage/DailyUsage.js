import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../../styles/bootstrap/bootstrap.css';
import './styles/dailyUsage.css';

/* TODO integrate Highcharts */

class DailyUsage extends Component {
    static propTypes = {
        onBackToScoreClick: PropTypes.func.isRequired,
        dailyUsage: PropTypes.array.isRequired,
    };

    render() {
        const dailyUsageList = this.props.dailyUsage.map((dayOfUse) =>
            <tr>
                <td width="50%">{Object.keys(dayOfUse)[0]}</td>
                <td width="50%">{dayOfUse[Object.keys(dayOfUse)[0]]}</td>
            </tr>
        );

        return (
            <div>
                <div>
                    <a className="btn-link" onClick={this.props.onBackToScoreClick}>Back to Score</a>
                </div>
                <div className="daily-usage">
                    <table width="100%">
                        <tbody>
                        <th colSpan={2}>Your Daily Usage</th>
                        {dailyUsageList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DailyUsage;