import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';
import ReleasesTable from '../ui/ReleasesTable';

export default class Releases extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.state = {
            releases: []
        }
    }
    handleSubmit(e,{name, date}) {
        e.preventDefault();
        var state = this.state;
        var myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({
            releases: state.releases.concat(myRelease)
        });
    }
    componentDidMount() {
        this.setState({
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 01',
                    releaseDate: '01/01/2017'
                },
                {
                    id: 2,
                    releaseName: 'Release 02',
                    releaseDate: '01/02/2017'
                },
                {
                    id: 3,
                    releaseName: 'Release 03',
                    releaseDate: '01/03/2017'
                },
                {
                    id: 4,
                    releaseName: 'Release 04',
                    releaseDate: '01/04/2017'
                }
            ]
        })
    }
    removeRow(index) {
        let releases = [...this.state.releases];
        releases.splice(index, 1);
        this.setState({ releases });
    }
    render() {
        return (
            <div className="container">
                <ReleaseForm 
                    submitHandler={this.handleSubmit}
                />
                <ReleasesTable
                    releases= { this.state.releases }
                    removeRow = { this.removeRow }
                />
            </div>
        )
    }
}