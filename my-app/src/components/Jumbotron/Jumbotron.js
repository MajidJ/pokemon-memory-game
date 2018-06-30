import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return(
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="card card-image">
                        <div className="text-center py-5 px-4 my-5">
                            <div>
                                <h1 className="card-title pt-3 mb-1 font-bold"><strong>Pokemon Memory Game</strong></h1>
                                <h2 className="card-lead">Can you catch em all?!</h2>
                                <p className="mx-5 mb-5">
                                    Game Rule: Click all the pokemon and avoid clicking the same pokemon twice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Jumbotron;