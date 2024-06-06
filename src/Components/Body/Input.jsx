import React from "react";
import './Input.css'
import BodyMsg from "../BodyMsg/BodyMsg";
import image1 from '../../assets/image1.png'
function Input() {
    return(
        <>
            <div className="msg">
                <BodyMsg />
                
            </div>
            {/* <div className="inputArrow"> */}
                <input type="text"  placeholder="Send a message..." className="input"/>
                {/* <img className="arrowimg" src={image1} alt="" /> */}
            {/* </div> */}
        
        </>
    )
}

export default Input;