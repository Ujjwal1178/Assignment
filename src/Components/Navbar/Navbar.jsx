import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {

  const [file, setFile] = useState();

  function handleFile(event){
    let val = setFile(event.target.file);
    console.log(file);
  }
  return (
    <div className="navbar">
      <div className="imgLogo">
        <img src={logo} alt="" className="logo" />
        <span className="logospan1">  
          planet <br />
          <span className="logospan2">
            formerly
            <span className="logospan3"> Dphi</span>
          </span>
        </span>
      </div>
      
      <div className="divclass">
        <form action="">
        <button className="btn">
        <label htmlFor="pdfUpload">
          <span className="plus"><b>+</b></span>
          Upload PDF</label>
        <input type="file" name="file" id="pdfUpload" className="inputpdf" onChange={handleFile}/>
      </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
