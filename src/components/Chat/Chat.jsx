import React from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa"

import "./Chat.scss";

export default function ChatTable(){
    return(
        <div className="main-chat">
            <div className="header-chat">
                <IoChatbubblesSharp fill="#fff"/>
                <h3 className="subtitle">Live Chat</h3>
            </div>
            <div className="chat-box">
                <p className="user-title" style={{color: 'black'}}>user1:</p>
                <p className="user-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tristique diam vel maximus.
                 In hendrerit arcu in dolor sodales congue.</p>
            </div>
            <div className="chat-box">
                <p className="user-title" style={{color: '#237F80ff'}}>user2:</p>
                <p className="user-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tristique diam vel maximus.
                 In hendrerit arcu in dolor sodales congue.</p>
            </div>
            <div className="chat-box">
                <p className="user-title" style={{color: '#867D70ff'}}>user1:</p>
                <p className="user-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tristique diam vel maximus.
                 In hendrerit arcu in dolor sodales congue.</p>
            </div>
            <div className="chat-box">
                <p className="user-title" style={{color: '#237F80ff'}}>user2:</p>
                <p className="user-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tristique diam vel maximus.
                 In hendrerit arcu in dolor sodales congue.</p>
            </div>
            <div className="chat-box">
                <p className="user-title" style={{color: '#867D70ff'}}>user1:</p>
                <p className="user-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tristique diam vel maximus.
                 In hendrerit arcu in dolor sodales congue.</p>
            </div>
            <div className="chat-input">
                <input type="text" className="message-input" name="message" placeholder="Digite algo" />
                <FaPaperPlane fill="#fff"/>
            </div>
        </div>
    )
}