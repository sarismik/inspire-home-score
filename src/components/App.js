import React, { Component } from 'react';
import Score from './score/Score';
import '../styles/base.css';
import UserToggle from "./user/UserToggle";
import DailyUsage from "./daily-usage/DailyUsage";

/* TODO consider integrating with Bootstrap */

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleUser = this.toggleUser.bind(this);
        this.showDailyUsage = this.showDailyUsage.bind(this);
        this.showScore = this.showScore.bind(this);
        this.state = {
            userId: 1,
            loading: true,
            error: false,
            showDailyUsage: false,
        };
    }

    componentDidMount() {
        this.updateStateBasedOnSummaryApi();
    }

    updateStateBasedOnSummaryApi() {
        this.setState({loading: true,});

        fetch('https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/' + this.state.userId + '/summary')
            .then(results => {
                return results.json()
            })
            .then(data => {
                const score = data.score;
                const scoreText = data.score_text;
                const avgDailyUsage = data.average_daily_energy_usage;
                const avgDailyTemp = data.average_daily_temp;
                this.setState({
                    score: score,
                    scoreText: scoreText,
                    avgDailyUsage: avgDailyUsage,
                    avgDailyTemp: avgDailyTemp,
                    loading: false,
                    error: false,
                });
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true,
                })
            })
    }

    updateStateBasedOnDailyUsageApi() {
        this.setState({loading: true,});
        /* TODO consider making the prefix below a constant */
        fetch('https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/' + this.state.userId + '/energy/usage/daily')
            .then(results => {
                return results.json()
            })
            .then(data => {
                const dailyEnergyUsage = data.daily_energy_usage;
                this.setState({
                    dailyEnergyUsage : dailyEnergyUsage,
                    loading: false,
                    error: false,
                });
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true,
                })
            })
    }

    toggleUser() {
        this.setState({ userId: this.getOtherUserId() },
            this.state.showDailyUsage ?
                this.updateStateBasedOnDailyUsageApi :
                this.updateStateBasedOnSummaryApi);
    }

    showDailyUsage() {
        this.setState({ showDailyUsage: true, loading: true }, this.updateStateBasedOnDailyUsageApi);
    }

    showScore() {
        this.setState({ showDailyUsage: false, loading: true }, this.updateStateBasedOnSummaryApi);
    }

    render() {
        if (this.state.error) {
            return <div>Sorry! There was an unexpected issue, call Mike</div>;
        }

        if (!this.state.loading) {
            return (
                <div className="container">
                    <UserToggle onClick={this.toggleUser} otherUserId={this.getOtherUserId()}/>
                    {this.state.showDailyUsage ?
                        <DailyUsage dailyUsage={this.state.dailyEnergyUsage} onBackToScoreClick={this.showScore}/> :
                        <Score score={this.state.score} scoreText={this.state.scoreText}
                               avgDailyUsage={this.state.avgDailyUsage} avgDailyTemp={this.state.avgDailyTemp}
                               onDailyUsageClick={this.showDailyUsage} />
                    }
                </div>
            );
        }
        else {
            return <div>Loading...</div>;
        }
    }

    getOtherUserId() {
        return this.state.userId === 1 ? 2 : 1;
    }
}

export default App;