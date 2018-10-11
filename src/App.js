import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state={isRegisterOpen:false};
  }

  showRegisterForm = () => {
    this.setState({
      isRegisterOpen:true
    });
  }
  showLoginForm = () => {
    this.setState({
      isRegisterOpen:false
    });
  }
  render() {
    return (
      <div className="App">
        <section className="user">
          <div className="user_options-container">
            <div className="user_options-text">
              <div className="user_options-unregistered">
                <h2 className="user_unregistered-title">No tienes una cuenta, registrate!</h2>
                <p className="user_unregistered-text">Registrate para disfrutar de las aulas virtuales</p>
                <button className="user_unregistered-signup" id="signup-button" onClick={this.showRegisterForm} > Registrarse</button>
              </div>
              <div className="user_options-registered">
                <h2 className="user_registered-title">Ya tienes una cuenta?</h2>
                <p className="user_registered-text">Ingresa para disfrutar de las aulas virtuales</p>
                <button className="user_registered-login" id="login-button"  onClick={this.showLoginForm}>Login</button>
              </div>
            </div>
            <div className="container">
            {
              !this.state.isRegisterOpen ?(
              <div className="user_options-login user_options-forms" id="user_options-login">
                <div className="user_forms-login">
                  <h2 className="forms_title">Ingresar</h2>
                  <form className="forms_form">
                    <fieldset className="forms_fieldset">
                      <div className="forms_field">
                        <input type="email" placeholder="Email" className="forms_field-input" required autoFocus></input>
                      </div>
                      <div className="forms_field">
                        <input type="password" placeholder="Password" className="forms_field-input" required></input>
                      </div>
                      <div className="forms_field">
                        <input type="confirm-password" placeholder="Confirmar Password" className="forms_field-input" required></input>
                      </div>
                    </fieldset>
                    <div className="forms_buttons">
                      <button type="button" className="forms_buttons-forgot">Olvidaste la contrasena?</button>
                      <input type="submit" value="Log In" className="forms_buttons-action"></input>
                    </div>
                  </form>
                </div>
              </div>
              ): null

            }

              {
                this.state.isRegisterOpen ? (
                <div className="user_options-forms user_option-registered">
                  <div className="user_forms-signup">
                    <h2 className="forms_title">Registrarse</h2>
                    <form className="forms_form">
                      <fieldset className="forms_fieldset">
                        <div className="forms_field">
                          <input type="text" placeholder="Nombre" className="forms_field-input" required ></input>
                        </div>
                        <div className="forms_field">
                          <input type="email" placeholder="Email" className="forms_field-input" required ></input>
                        </div>
                        <div className="forms_field">
                          <input type="password" placeholder="Password" className="forms_field-input" required ></input>
                        </div>
                      </fieldset>
                      <div className="forms_buttons">
                        <input type="submit" value="Enviar" className="forms_buttons-action"></input>
                      </div>
                    </form>
                  </div>
                </div>
                ): null
              }
            </div>
          </div>
        </section> 
      </div>
    );
  }
}

export default App;
