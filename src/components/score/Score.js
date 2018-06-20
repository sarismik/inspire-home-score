import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/bootstrap/bootstrap.css';
import './styles/score.css';

class Score extends Component {
    static propTypes = {
        score: PropTypes.number.isRequired,
        scoreText: PropTypes.string.isRequired,
        avgDailyUsage: PropTypes.number.isRequired,
        avgDailyTemp: PropTypes.number.isRequired,
        onDailyUsageClick: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="score">
                <table width="100%">
                    <tbody>
                        <tr><th colSpan={2}>Your Score</th></tr>
                        <tr><td colSpan={2} className="score-summary">{this.props.score}</td></tr>
                        <tr><td colSpan={2} className="score-text">{this.props.scoreText}</td></tr>
                        <tr>
                            <th>Average daily usage</th>
                            <th>Average daily temp</th></tr>
                        <tr>
                            <td>
                                <a className="btn-link" title="Click to see daily usage stats"
                                   onClick={this.props.onDailyUsageClick}>
                                    {this.props.avgDailyUsage}
                                </a>
                            </td>
                            <td>{this.props.avgDailyTemp}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Score;