import React from 'react'
import './Props.css'
 const Props=(props)=>{
    const name=props.name;
    const work=props.work;
    return (
        <div className='empdetail'>
            <h2> Employee Details</h2>
        
        <><p>Employee name : {name}</p>
        <p> Employe work :{work}</p></>
        </div>
    );
 }
 //if we dont give any props then it take by default
 Props.defaultProps = {
    name: "Manoj",
    work: "FM"
  }
export default Props;