import React, { Component } from 'react';
import './styles/score.css';

class Score extends Component {
    score;
    scoreText;
    avgDailyUsage;
    avgDailyTemp;

    render() {
        return (
            <div className="score">
                <table>
                    <tbody>
                        <tr><th colSpan={2}>Your Score</th></tr>
                        <tr><td className="score-summary" colSpan={2}>{this.props.score}</td></tr>
                        <tr><td colSpan={2} className="score-text">{this.props.scoreText}</td></tr>
                        <tr><th>Average daily usage</th><th>Average daily temp</th></tr>
                        <tr><td>{this.props.avgDailyUsage}</td><td>{this.props.avgDailyTemp}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Score;