import React from "react";
import { RiSettings3Fill } from "react-icons/ri";

import SongList from "./List/List";
import ChatTable from "./Chat/Chat";
import Player from "./Player/Player";


import "./main.scss"

export default function MainPage(){
    return(
        <div>
            <div className="Header">
                <div className="Header-left">
                    <h3>Listen Party</h3>
                </div>
                <div className="Header-right">
                    <div>
                        <button className="btn btn-add" type="button">
                            Adicionar Playlist
                        </button>
                    </div>
                    <RiSettings3Fill fill="#fff"/>
                    <div>
                        <button className="btn btn-exit" type="button">
                            Sair
                        </button>
                    </div>
                </div>
            </div>
            <div className="body">
                <SongList />
                <ChatTable />
            </div>
            <div className="footer">
                <Player />
            </div>
        </div> 
    );
}