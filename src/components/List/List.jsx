import React from "react";
import Capa from "../../images/capa.jpg";
import Album1 from "../../images/emaus.jpeg";
import Album3 from "../../images/lembre_se_90.jpeg";
import Album4 from "../../images/e_tudo_sobre_voce.jpeg";

import "./List.scss";

export default function SongList() {
    return(
        <div className="main-body">
            <div className="banner">
                <img className="background-image" src={Capa} alt="Capa" />
                <div className="bottomLayer"></div>
            </div>
            <h1 className="title">Morada</h1>
            <div className="main-list">
                <div className="song-box">
                    <img className="album-image" src={Album4} alt="album" />
                    <p>É Tudo Sobre Você | Morada (Clípe Oficial) </p>
                    <div className="duration">
                        <p>8:27</p>
                    </div>
                </div>
                <div className="song-box">
                    <img className="album-image" src={Album1} alt="album" />
                    <p>Emaus | Morada Feat.Poeima Music (Clípe Oficial) </p>
                    <div className="duration">
                        <p>6:35</p>
                    </div>
                </div>
                <div className="song-box">
                    <img className="album-image" src={Album3} alt="album" />
                    <p>Em Espirito Em Verdade / Não Há Deus Maior / Maravilhoso / Maior É Jesus (Clípe Oficial) | Morada</p>
                    <div className="duration">
                        <p>5:14</p>
                    </div>
                </div>
                <div className="song-box">
                    <img className="album-image" src={Album3} alt="album" />
                    <p>Aclame Ao Senhor / Manancial / A Ele A Glória / Te Agradeço (Clípe Oficial) - Morada</p>
                    <div className="duration">
                        <p>5:15</p>
                    </div>
                </div>
                <div className="song-box">
                    <img className="album-image" src={Album3} alt="album" />
                    <p>Plano Melhor / Edifica / Bom Estamos Aqui (Clípe Oficial) | Morada</p>
                    <div className="duration">
                        <p>3:39</p>
                    </div>
                </div>
            </div>
        </div>
    )
}