import React from 'react';
import Video from '../Video/Video';
import './Header.css';

function Header() {
    return (
        <div className="header container">
            <div className="header-info col">
                <h1>Big Comeback</h1>
                <p>
                    Nullan porta, eros id aliquam pulvinar, urna ex mattis eros,
                    quis vestibulum urna turpis et risus. Mauris porttitor risus
                    faucibis, uactor arcu a, tincidunt nibh
                </p>
                <div className="btn-container">
                    <button className="btn-watch">WATCH NOW</button>
                    <button className="btn-play">+ PLAYLIST</button>
                </div>
            </div>
            <Video />
        </div>
    );
}

export default Header;
