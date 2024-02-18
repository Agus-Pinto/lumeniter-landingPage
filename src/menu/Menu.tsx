// Menu.js
import React from 'react';
import './Menu.css';

export function Menu() {
    return (
        <div className="mainContainer">
            {/* <img className='backPicture' src={require('../assets/images/lumen.jpg')} /> */}
            <div className='logoBox'>
                <img className='logoLum' src={require('../assets/images/logoLumeniter.webp')} alt="Logo" />
            </div>

            <div className='navigation'>
                <input type='checkbox' className='navigationCb' id='navigationToggle' />

                <label className='navigationBt' htmlFor='navigationToggle'>
                    <span className='navigationIcon'>&nbsp;</span>
                </label>

                <div className='navigationBk'>&nbsp;</div>
                <nav className="navigationNav">
                    <ul className='navigationList'>
                        <li className='navigationItem'><a href='#' className='navigationLink'>Home</a></li>
                        <li className='navigationItem'><a href='#' className='navigationLink'>Projects</a></li>
                        <li className='navigationItem'><a href='#' className='navigationLink'>About me</a></li>
                        <li className='navigationItem'><a href='#' className='navigationLink'>Contact me</a></li>
                    </ul>
                </nav>
            </div>

            <div className="bannerSection">
                {/* <video src={require('../assets/videos/video.mp4')} autoPlay loop muted /> */}
            </div>
        </div>
    );
}
