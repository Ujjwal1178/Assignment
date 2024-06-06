import React from "react";
import './BodyMsg.css'
import image from '../../assets/image.png'

function BodyMsg() {
    return(
        <>
            <div className="bodyMsg">
                <img src={image} alt="" className="imgcls"/>
                <textarea name="message" id="msg" className="textBodyMsg" readOnly >
                    Hello bla bla bla bla bla bla  
                                
                </textarea>
            </div>
        </>
    )
}


export default BodyMsg;