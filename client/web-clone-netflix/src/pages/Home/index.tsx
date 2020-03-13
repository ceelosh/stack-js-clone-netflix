import React, { Component } from 'react';
import netflixLogo from "../../assets/logos/netflix_red_simple.svg";
import profilePic from "../../assets/images/profile/p-01.png";

import '../../UI/pages/home.css';

import { FaSearch, FaGift } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';

class Home extends Component{
    render(){
        return(
            <div id="home" className="background">
                <div className="dflex flex-column">
                    <header>
                        <nav className="dflex flex-row navbar a-items-center">
                            <div className="dflex flex-row just-content-flex-start w-80 a-items-center">
                                <img src={netflixLogo} alt="logo" className="logo simple" />
                                <ul className="font-white">
                                    <li>Inicio</li>
                                    <li>Série</li>
                                    <li>Filmes</li>
                                    <li>Mais recentes</li>
                                    <li>Minha lista</li>
                                </ul>
                            </div>
                            <div className="dflex flex-row just-content-flex-end w-20">
                                <ul className="font-white">
                                    <li><FaSearch/></li>
                                    <li>INFANTIL</li>
                                    <li><FaGift/></li>
                                    <li><IoIosNotificationsOutline/></li>
                                    <li><img src={profilePic} alt="profile icon"width="25" height="25" /></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <div className="spotlight">

                    </div>
                    <main className="dflex flex-column">
                        <div className="catalog">

                        </div>
                    </main>
                </div>
                
            </div>
        );
    }
}

export default Home;