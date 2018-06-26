import React from 'react';

const HomeCard = (props) => {
    return (
        <div className="col-12 col-sm-4">
            <div className="card mb-4">
                <div className="card-header">
                    <img className="card-img-top img-fluid rounded-circle" alt="thumbnail" src="https://thumbs.dreamstime.com/b/%C3%ADcone-da-agricultura-conceito-da-paisagem-gr%C3%A1fico-de-vetor-73690097.jpg" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-secondary btn-block" onClick={props.action} >Go!</button>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;