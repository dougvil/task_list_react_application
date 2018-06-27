import React from 'react';

const ReleasesTable = ({releases, removeRow}) => {
    const handleDelete = (index) => {
        removeRow(index);
    }
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
                {releases.map((release, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{release.id}</th>
                            <td>{release.releaseName}</td>
                            <td>{release.releaseDate}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {handleDelete(index)}}>X</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ReleasesTable;