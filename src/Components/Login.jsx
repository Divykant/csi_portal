import React from "react";
import './Login.css';
import {NavLink} from "react-router-dom"

const Login = ()  =>{ 
    return(
      <>
          <div className="login_side">
              <img className="login_img" src="assets/heading.svg" alt="Graphic"/>
              <div className="form_area">
              <form>
                  <div className="registerFields">
                     <img className="user_svg" src="assets/user.svg" />
                     <input type="text" className="input1" placeholder="Roll Number"/>
                  </div>
                  <div className="registerFields">
                     <img className="pass_svg" src="assets/pass.svg"/>
                     <input type="password" className="input2" placeholder="Password"/>
                  </div>
              </form>
               <button className="submit_button"><NavLink exact activeclassName="ActiveClass" to="/instruction">Login</NavLink></button>
               <p className="lastLine"> Not registered yet? <span><NavLink exact activeclassName="ActiveClass" to="/register">Register</NavLink></span></p>
               </div>
          </div>
          <div className="img_side">
              {/* <img className="girl_img" src="assets/illustration.png" alt="Graphic"/> */}
          </div>
      </>
  );
};

export default Login;
