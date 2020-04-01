import React from "react";
import JoelImage from './JoelatBarron_2016cropped.jpg';


function ShowBio() 
{
    return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 bg-light">
          <div className="page-header">
            <h1 className="p-2 font-weight-bold">About Me</h1>
  
            <hr className="mb-2" />
        </div>
      <div>
  
          <img className="d-inline p-2 float-left" src={JoelImage} height="200" width="150" alt="Joel Rudin Portrait"/>
  
          <p className="y-3">Joel Rudin is a professional musician who also creates websites, does graphic design and makes art.  </p>
        </div>
        
      </div>
    </div>
    </div>   
    )
}




export default ShowBio;