import React from 'react';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
                <a className="navbar-brand" href="/"><strong>Pokemon Memory</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    <ul className="navbar-nav nav-flex-icons">
                        <li className="nav-item active">
                            Score
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    
}

export default Navbar;