import React, { useState } from "react";
import {IoMdSkipForward,IoMdSkipBackward,IoMdPlay,IoMdPause} from 'react-icons/io';
import {ImVolumeHigh} from 'react-icons/im';
import {TfiControlShuffle} from 'react-icons/tfi';
import {AiOutlineReload} from 'react-icons/ai';

import "./Player.scss";

import Album4 from "../../images/e_tudo_sobre_voce.jpeg";

export default function Player(){
    const [isActive, setIsActive] = useState(false);

    return(
        <div className="Main">
            <div className="Footer-box">
                <div className="song-box">
                    <img className="album-image" src={Album4} alt="album" />
                    <p>É Tudo Sobre Você | Morada (Clípe Oficial) </p>
                </div>
                <div className="Player-buttons">
                    <IoMdSkipBackward fill="#fff" />
                    <button className="button-player" onClick={()=> setIsActive(!isActive)}>
                        {isActive ? 
                            <IoMdPlay fill="#fff" />
                            : <IoMdPause fill="#fff" />
                        }
                    </button>
                    <IoMdSkipForward fill="#fff"/>
                </div>
            </div>
            <div className="Player-controls">
                    <ImVolumeHigh fill="#fff" />
                    <TfiControlShuffle fill="#fff" />
                    <AiOutlineReload fill="#fff"/>
            </div>
        </div> 
    )
}