import React from 'react';

function Display(props) {
     return (
         <div className="container">
           <div className="col-md-12 card mt-5">
             <a href={props.link} target="_blank" className="result">
              <div className=" mt-4 text-center">
                <h3 className="mb-2">{props.title}</h3>
                <p>{props.description}</p>
                </div>
             </a>
           </div>
         </div>
     );
 }



export default Display