import React, { Component } from 'react';
import Score from './score/Score';
import '../styles/base.css';
import UserToggle from "./user/UserToggle";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : 1,
            score : "",
            scoreText : "",
            avgDailyUsage : "",
            avgDailyTemp : "",
        };
    }

    componentWillMount() {
        this.updateStateBasedOnSummaryApi();
    }

    updateStateBasedOnSummaryApi() {
        fetch('https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/' + this.state.userId + '/summary')
            .then(results => {
                return results.json()
            })
            .then(data => {
                let score = data.score;
                let scoreText = data.score_text;
                let avgDailyUsage = data.average_daily_energy_usage;
                let avgDailyTemp = data.average_daily_temp;
                this.setState({
                    score: score,
                    scoreText: scoreText,
                    avgDailyUsage: avgDailyUsage,
                    avgDailyTemp: avgDailyTemp,
                });
            })
    }

    toggleUser() {
        this.setState({userId : this.getOtherUserId(),},
            this.updateStateBasedOnSummaryApi);
    }

    /* TODO show "Loading, please wait..." until there is actual data to show*/
    render() {
        return (
            <div className="container">
                <UserToggle onClick={() => this.toggleUser()} otherUserId={this.getOtherUserId()}/>
                <Score score={this.state.score} scoreText={this.state.scoreText}
                       avgDailyUsage={this.state.avgDailyUsage} avgDailyTemp={this.state.avgDailyTemp}/>
            </div>
        );
    }

    getOtherUserId() {
        return this.state.userId === 1 ? 2 : 1;
    }
}

export default App;