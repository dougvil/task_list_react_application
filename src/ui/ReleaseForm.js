import React from 'react';

const ReleaseForm = ({submitHandler}) => {
    let _releaseName, _releaseDate;
    const handleSubmit = (e) => {
        let data = {
            name: _releaseName.value,
            date: _releaseDate.value
        }
        submitHandler(e, data);
    }
    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <label className="sr-only">Release Name</label>
            <input type="text" ref={input => _releaseName = input} className="form-control mb-2 mr-sm-2" placeholder="Release Name" />
            <input type="date" ref={input => _releaseDate = input} className="form-control mb-2 mr-sm-2" placeholder="Release Date" />
            <button type="submit" className="btn btn-primary mb-2">Save</button>
        </form>
    )
}

export default ReleaseForm;

