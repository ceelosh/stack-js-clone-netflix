import React, { Component } from 'react';

import netflixLogo from "../../assets/icons/netflix_red_simple.svg";
import facebookLogo from "../../assets/icons/facebook_square_old.svg";
import "../../UI/general/index.css";

class Login extends Component{

    selectChange = (event: any) => {
        console.log(event.target.value)
    }
    render(){
        return(
            <div className="page-fullscreen dflex flex-column login-background">
                <header>
                    <nav className="dflex navbar just-content-flex-start">
                        <img src={netflixLogo} alt="logo" className="logo simple" />
                    </nav>
                </header>                
                <main className="dflex just-content-center">
                    <form className="dflex flex-column form-simple">
                        <h2>Sign In</h2>
                        
                        <section className="dflex flex-column">
                            <input type="text" placeholder="Email or phone number" className="round"/>
                            <input type="password" placeholder="Password" className="round" />                            
                            <br/>
                            <button type="button" className="btn md round red">
                                <span>Sign up</span>
                            </button>
                            <label>
                                <input type="checkbox"/>
                                Remember me
                            </label>
                            
                        </section>
                        
                        <section className="dflex flex-column">
                            <div className="facebook-login">
                                <button type="button" className="btn">
                                    <img src={facebookLogo} alt="button login facebook"/><span> Login with Facebook</span>
                                </button>
                            </div>
                            <div>
                                <span>New to Netflix? Sign up now</span>
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
                            <div className="dflex flex-row  just-content-between">
                                <span>TWITTER</span>
                                <span>GITHUB</span>
                                <span>?</span>
                            </div>    
                        </section>

                        <section>
                            <div>                        
                                <label>
                                    <span role="img" aria-label="globe-with-meridians">🌐:</span>
                                    <select id="language-selector" onChange={this.selectChange}>
                                        <option value="pt-br">PT-BR</option>
                                        <option value="en-US">EN</option>
                                    </select>
                                </label>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Login;