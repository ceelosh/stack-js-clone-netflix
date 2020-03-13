import React, { Component } from 'react';

import netflixLogo from "../../assets/logos/netflix_red_simple.svg";
import facebookLogo from "../../assets/icons/svg/036-facebook.svg";
import "../../UI/pages/login.css";

class Login extends Component{

    selectChange = (event: any) => {
        console.log(event.target.value)
    }
    
    render(){
        return(
            <div className="dflex flex-column login-background">
                <header>
                    <nav className="dflex navbar just-content-flex-start">
                        <img src={netflixLogo} alt="logo" className="logo simple" />
                    </nav>
                </header>                
                <main className="dflex just-content-center">
                    <form className="dflex flex-column form-simple">
                        <h2 className="font-white">Sign In</h2>
                        
                        <section className="dflex flex-column">
                            <input type="text" placeholder="Email or phone number" className="round"/>
                            <input type="password" placeholder="Password" className="round" />                            
                            <br/>
                            <button type="button" className="btn-lg p-md round c-red font-white">
                                <strong>Sign up</strong>
                            </button>
                            <label className="c-pointer">
                                <input type="checkbox"/>
                                Remember me
                            </label>
                            
                        </section>
                        
                        <section className="dflex flex-column">
                            <div className="facebook-login">
                                <button type="button" className="btn-lg dflex a-items-center">
                                    <img src={facebookLogo} alt="button login facebook" className="icon-sm margin-r-sm"/><span>Login with Facebook</span>
                                </button>
                            </div>
                        </section>
                    </form>
                </main>
                <footer className="dflex flex-column">
                    <div className="container">
                        <section>
                            <div>Questions? Do a pull request</div>
                        </section>

                        <section>
                            <div className="dflex flex-row just-content-between">
                                <span>
                                    <a href="https://twitter.com/rosaengliean">twitter</a>
                                </span>
                                <span>
                                    <a href="https://github.com/MarceloDaLuz">github</a>
                                </span>
                            </div>    
                        </section>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Login;