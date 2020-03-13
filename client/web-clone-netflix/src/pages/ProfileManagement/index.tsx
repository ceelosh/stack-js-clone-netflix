import React, { Component } from 'react';

import netflixLogo from "../../assets/logos/netflix_red_simple.svg";
import "../../UI/pages/profilemanagement.css";

import proviusIcon from "../../assets/images/profile/p-01.png";
class ProfileManagement extends Component{
    
    selectProfile = (name: String) =>{
        alert(name);
        return true;
    }
    render(){
        return(
            <div id="profile-management" className="dflex flex-column default-background">
                <header>
                    <nav className="dflex navbar just-content-flex-start">
                        <img src={netflixLogo} alt="logo" className="logo simple" />
                    </nav>
                </header>                
                <main className="dflex flex-column">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="font-white">Quem está assistindo?</h1>
                        </div>
                        <section id="profiles" className="dflex flex-row just-content-center">
                            <div className="profile-box" onClick={() => this.selectProfile('Marcelo')}>
                                <div className="profile-photo">
                                    <img src={proviusIcon} alt="profile icon"/>
                                </div>
                                <div className="profile-name font-white text-center">
                                    <span><strong>Marcelo</strong></span>
                                </div>
                            </div>
                        </section>
                        <div className="dflex flex-row just-content-center margin-t-sm">
                            <button className="btn-md p-md border-slim font-white">GERENCIAR PERFIS</button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ProfileManagement;