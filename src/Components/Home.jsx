import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import "./Home.css"

export default function Home() {
    return (
  <>
  <div className="topmost">
  <h1 className="top_heading">CINE'21 </h1>
  <h2 className="sub_heading">Instructions </h2>

    <div className="main_div">
       <div className="home_div">
       <Scrollbars className="scroll" style={{width:"100%", heigth:"100%"}}
       //autoHideDuration={200}
        >

         <p className="home_p">
         <ul className="home_ul">
            <li className="home_li">This exam contains 4 mandatory categories namely as HTML, CSS, APTITUDE and SQL.</li>
            <li className="home_li">However, the candidate can select a choice of language(category) from the dropdown below.</li>
            <li className="home_li">This exam will be of 60 minutes in duration. When you submit the test/run out of time all your marked <br/>responses whether saved or not will be submitted.</li>
            <li className="home_li">For ever correct answer the candidate will be awarded 1 mark.</li>
            <li className="home_li">For every question, you can either SAVE or MARK FOR REVIEW for the response.</li>
            <li className="home_li">A question once attempted cannot be left unanswered as there is <span className="home_span" >NO NEGATIVE MARKING</span> in this test.</li>
            <li className="home_li">You can end the test anytime by clicking on the submit button. Make sure you submit only when you are done.</li>
            <li className="home_li">Once done submitting the test you'll be redirected to a feedback form. Your participation will only be <br/>considered once submit your feedback from.</li>
            <li className="home_li"><span className="home_span" >If the candidate tries to do any malicious activity, he/she shall be actomatically disqualified.</span></li>
            <li className="home_li">Before starting the test please make sure you have a stable internet connection.</li>
            <li className="home_li"><span className="home_span" >Kindly take note that this test allows only a single login for a user, so any kind of disconnection<br/>
             or reloading of the page might log you out of the test.</span></li> <br />
        </ul>
        </p>
        <span className="lastspan">Choose a language according to your prefernce</span>
        <div className="registerFields">
            <label for="language" className="labelLanguage"></label>
            <select name="language" className="selLang">
                <option value="null">Language</option>
                <option value="C++">C++</option>
                <option value="C">C</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
            </select>    
        </div>
    <button type="submit" className="home_submit"> Start Your Exam</button>
    
    </Scrollbars>
    </div>
    </div>  
    </div>
  </>
    )
}