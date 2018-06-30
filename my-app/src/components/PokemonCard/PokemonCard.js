import React from 'react';

class PokemonCard extends React.Component {
    state = {
        guessed: false
    }
    render() {
        return(
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                <img src="https://vignette.wikia.nocookie.net/youtubepoop/images/f/f7/5Pikachu.png/revision/latest?cb=20141108062013" className="img-fluid z-depth-1" alt="Pikachu"/>
            </div>
        )
    }
}

export default PokemonCard;