import React from "react";
import './Login.css';

const Login = ()  =>{

 
    return(
      <>
      <div className="maindiv">
          <div className="login_Leftside">
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
                <div className="lastdiv">
                    <button className="submit_button">Login</button>
                </div>
                <div className="lastdiv">
                <p className="lastLine"> Not registered yet? <a href="#" >Register</a></p>
                
                </div>
               </div>
          </div>
          <div className="img_Righside">
              <img className="girl_img" src="img/illustration.png" alt="Graphic"/>
          </div>
      </div>
      </>
  );
};

export default Login;