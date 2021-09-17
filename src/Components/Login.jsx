import React from "react";
import './Login.css';

const Login = ()  =>{

 
    return(
      <>
      <div className="main_div">
          <div className="login_side">
              <img className="login_img" src="img/heading.svg" alt="Graphic"/>
              <div className="form_area">
              <div className="registerFields">
                    <img className="user_svg" src="img/user.svg" />
                    <input type="text" className="input1" placeholder="Roll Number"></input>
               </div>
               <div className="registerFields">
                    <img className="pass_svg" src="img/pass.svg"/>
                    <input type="password" className="input2" placeholder="Password"></input>
               </div>
               <button className="submit_button">Login</button>
               <p className="lastLine"> Not registered yet? <span>Register</span></p>
               </div>
          </div>
          <div className="img_side">
              <img className="girl_img" src="img/illustration.png" alt="Graphic"/>
          </div>
      </div>
      </>
  );
};

export default Login;