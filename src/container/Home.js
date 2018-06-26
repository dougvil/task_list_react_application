import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router';

export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        description: 'Manage Releases',
        action: () => hashHistory.push('/releases')
    }
    homeCardBacklog = {
        title: 'Backlog',
        description: 'Manage Backlog',
        action: () => hashHistory.push('/backlog')
    }
    homeCardSprints = {
        title: 'Sprints',
        description: 'Manage Sprints',
        action: () => hashHistory.push('/sprints')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <HomeCard {...this.homeCardReleases} />
                    <HomeCard {...this.homeCardBacklog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
        )
    }
}
