import React, { Component } from 'react';

export default class Releases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            releases: []
        }
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
        this.setState({releases});
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Release Name</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.releases.map((release, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{release.id}</th>
                                <td>{release.releaseName}</td>
                                <td>{release.releaseDate}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={this.removeRow.bind(this)} index={index}>X</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}